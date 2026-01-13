import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `"backend.nivaancare.com"`,
      },
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
      },
    ],
  },
};

export default nextConfig;
