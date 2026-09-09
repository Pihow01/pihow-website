import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig & { agentRules?: boolean } = {
  // Support deployment under a subpath (e.g. GitHub Pages repo path)
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Opt out of Next.js auto-generating AGENTS.md / CLAUDE.md
  agentRules: false,
  // Allow local network IP access during development without Turbopack warnings
  allowedDevOrigins: ["192.168.1.3", "localhost:3000"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
