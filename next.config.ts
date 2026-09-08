import type { NextConfig } from "next";

const nextConfig: NextConfig & { agentRules?: boolean } = {
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
