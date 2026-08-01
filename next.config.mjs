/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // Content-Security-Policy is set in `middleware.ts` instead of here:
    // the App Router hydrates via inline `<script>` tags, which need a
    // per-request nonce to run under a strict CSP. A static CSP (no nonce)
    // can only allow inline scripts via 'unsafe-inline', which defeats
    // the point of having a script-src policy at all. See middleware.ts
    // for the full explanation.
    return [
      {
        source: "/:path*",
        headers: [
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
