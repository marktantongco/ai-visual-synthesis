import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack root configuration
  turbopack: {
    root: __dirname,
  },

  // Images
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/avif", "image/webp"],
  },

  // Performance
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
