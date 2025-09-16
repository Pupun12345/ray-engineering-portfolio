import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // No allowedDevOrigins property here; remove it to fix the error
  },
};

export default nextConfig;
