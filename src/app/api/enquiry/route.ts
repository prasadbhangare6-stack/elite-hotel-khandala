import { NextResponse } from 'next/server';
import { HOTEL_INFO } from '@/data/hotelData';

export interface LeadPayload {
  fullName: string;
  phone: string;
  email?: string;
  roomType?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number | string;
  message?: string;
  source?: string;
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    const {
      fullName,
      phone,
      email = '',
      roomType = 'Super Deluxe Balcony Room',
      checkIn = '',
      checkOut = '',
      adults = 2,
      message = '',
      source = 'website-direct',
    } = body;

    // Basic validation
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Full name and contact number are required.' },
        { status: 400 }
      );
    }

    // Generate unique Lead Reference ID
    const timestamp = new Date();
    const dateCode = timestamp.toISOString().slice(2, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const leadId = `ELT-${dateCode}-${randomSuffix}`;

    // Construct WhatsApp message pre-fill
    const waText = [
      `🏨 *Elite Hotel Khandala - Direct Reservation Request*`,
      `*Lead Ref:* #${leadId}`,
      `*Guest Name:* ${fullName}`,
      `*Contact:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      `*Room Preference:* ${roomType}`,
      checkIn && checkOut ? `*Dates:* ${checkIn} to ${checkOut}` : null,
      `*Guests:* ${adults}`,
      message ? `*Special Request:* ${message}` : null,
      `_Submitted via Direct Reservation Desk_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(waText)}`;

    const leadRecord = {
      leadId,
      receivedAt: timestamp.toISOString(),
      fullName,
      phone,
      email,
      roomType,
      checkIn,
      checkOut,
      adults,
      message,
      source,
      status: 'NEW_UNCONFIRMED',
      hotelContact: HOTEL_INFO.phone,
    };

    // Log the lead for server monitoring
    console.log('[LEAD RECEIVED - ELITE HOTEL KHANDALA]:', JSON.stringify(leadRecord, null, 2));

    // Optional CRM / Google Sheets Webhook Dispatch
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadRecord),
        });
      } catch (webhookErr) {
        console.error('[LEAD DISPATCH ERROR]: Failed to trigger external webhook', webhookErr);
      }
    }

    // Optional Resend Email Dispatch
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || HOTEL_INFO.email;
    if (resendApiKey && notificationEmail) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Elite Hotel Direct <reservations@elitehotelkhandala.com>',
            to: [notificationEmail],
            subject: `[New Direct Booking Lead #${leadId}] ${fullName} - ${roomType}`,
            text: waText,
          }),
        });
      } catch (emailErr) {
        console.error('[LEAD EMAIL ERROR]: Failed to send notification email', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId,
      whatsappUrl,
      leadRecord,
      message: 'Reservation inquiry recorded successfully.',
    });
  } catch (error) {
    console.error('[RESERVATION FORM ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing reservation.' },
      { status: 500 }
    );
  }
}
