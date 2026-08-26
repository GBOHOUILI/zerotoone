/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://app.cal.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://app.cal.com",
      "font-src 'self' data:",
      "connect-src 'self' https://app.cal.com https://api.cal.com",
      "frame-src https://app.cal.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
