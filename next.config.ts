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
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "https://nivaancare.com/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
