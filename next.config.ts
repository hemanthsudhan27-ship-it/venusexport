import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    // Allow external image domains if needed in future
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
