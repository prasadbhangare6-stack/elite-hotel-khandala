/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow Arena/E2B live-preview host to load dev JS/HMR — without this, hydration
  // is blocked in preview and ALL scroll animations appear "not working".
  allowedDevOrigins: ['*.e2b.app', '*.vercel.app', 'localhost', 'localhost:3000', '127.0.0.1', '127.0.0.1:3000'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};
export default nextConfig;
