import type { NextConfig } from "next";
import path from "path";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'ai-visual-synthesis';

const nextConfig: NextConfig = {
  // Turbopack root configuration to silence warning
  turbopack: {
    root: __dirname,
  },

  // Static export for GitHub Pages
  output: isGitHubPages ? 'export' : undefined,
  
  // Base path for GitHub Pages (repository name)
  basePath: isGitHubPages ? `/${repoName}` : '',
  
  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: isGitHubPages,
  
  // Images configuration
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/avif", "image/webp"],
  },

  // Performance
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
