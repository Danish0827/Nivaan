import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
