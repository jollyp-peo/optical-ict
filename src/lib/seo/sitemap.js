import { env } from "@/config/env";

export function createStaticRoutes() {
  return [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/repairing",
    "/pickup-request",
    "/it-support",
    "/development",
    "/testimonials",
  ];
}

export function createSitemapEntries() {
  return createStaticRoutes().map(
    (route) => ({
      url: `${env.SITE_URL}${route}`,

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority:
        route === "" ? 1.0 : 0.8,
    })
  );
}