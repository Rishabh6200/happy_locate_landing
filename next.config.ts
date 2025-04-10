import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['https://mastiff-hopeful-poodle.ngrok-free.app'],
  },
};

export default nextConfig;
