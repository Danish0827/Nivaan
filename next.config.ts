import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
