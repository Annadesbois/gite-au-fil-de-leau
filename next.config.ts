import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Skip database calls during build
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
