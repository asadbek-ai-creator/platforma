import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'standalone' for Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
