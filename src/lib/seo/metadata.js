import { siteConfig } from "@/config/site";
import { env } from "@/config/env";

export function createMetadata({
  title,
  description,
  keywords = [],
  image = "/og/default-og.jpg",
  canonical = "",
  noIndex = false,
}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.company.name}`
    : siteConfig.seo.defaultTitle;

  const pageDescription =
    description ||
    siteConfig.seo.defaultDescription;

  const url = canonical
    ? `${env.SITE_URL}${canonical}`
    : env.SITE_URL;

  return {
    title: pageTitle,

    description: pageDescription,

    keywords: [
      ...siteConfig.seo.keywords,
      ...keywords,
    ],

    metadataBase: new URL(env.SITE_URL),

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },

    openGraph: {
      title: pageTitle,

      description: pageDescription,

      url,

      siteName:
        siteConfig.company.name,

      locale:
        siteConfig.seo.locale,

      type:
        siteConfig.seo.type,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: pageTitle,

      description: pageDescription,

      images: [image],
    },
  };
}