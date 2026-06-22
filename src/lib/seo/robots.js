import { env } from "@/config/env";

export function createRobotsConfig() {
  const isProduction =
    env.APP_ENV === "production";

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/admin",
          "/dashboard",
          "/api",
        ],
      },
    ],

    sitemap: `${env.SITE_URL}/sitemap.xml`,

    host: env.SITE_URL,
  };
}