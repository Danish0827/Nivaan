import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint during Vercel build
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
