import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { caseStudies } from "@/content/caseStudies";
import { blogPosts } from "@/content/blog";

const staticPaths = [
  "",
  "/services",
  "/services/subscription",
  "/services/one-time-development",
  "/industries",
  "/work",
  "/testimonials",
  "/pricing",
  "/about",
  "/blog",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/work/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
