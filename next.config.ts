import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
      },
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
      },
    ],
  },
};

export default nextConfig;
