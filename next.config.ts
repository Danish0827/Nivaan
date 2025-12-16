import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hclient.in",
      },
      {
        protocol: "https",
        hostname: "www.hclient.in",
      },
    ],
  },
};

export default nextConfig;
