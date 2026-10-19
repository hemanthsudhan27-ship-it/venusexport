import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/global-reach",
        destination: "/worldwide-reach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
