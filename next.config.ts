import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['*'], // This is permissive but suitable for a demo with NewsAPI
    unoptimized: true, // For simplicity in handling various news sources
  },
};

export default nextConfig;
