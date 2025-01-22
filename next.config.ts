import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  includePaths: [require('path').join(__dirname, 'styles')],
};

export default nextConfig;
