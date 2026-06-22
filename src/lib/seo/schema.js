import { siteConfig } from "@/config/site";
import { env } from "@/config/env";

const websiteUrl = env.SITE_URL;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.company.name,

    legalName:
      siteConfig.company.legalName,

    url: websiteUrl,

    logo: `${websiteUrl}/logo.png`,

    email:
      siteConfig.company.email,

    telephone:
      siteConfig.company.phone,

    sameAs: Object.values(
      siteConfig.socials
    ).filter(Boolean),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: siteConfig.company.name,

    image: `${websiteUrl}/logo.png`,

    telephone:
      siteConfig.company.phone,

    email:
      siteConfig.company.email,

    url: websiteUrl,

    address: {
      "@type": "PostalAddress",

      streetAddress:
        siteConfig.company.address.street,

      addressLocality:
        siteConfig.company.address.city,

      addressRegion:
        siteConfig.company.address.state,

      postalCode:
        siteConfig.company.address
          .postalCode,

      addressCountry:
        siteConfig.company.address
          .country,
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
}) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: name,

    name,

    description,

    provider: {
      "@type": "Organization",

      name:
        siteConfig.company.name,
    },

    areaServed: {
      "@type": "Country",

      name: "Nigeria",
    },

    url: `${websiteUrl}${url}`,
  };
}

export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map(
      ({ question, answer }) => ({
        "@type": "Question",

        name: question,

        acceptedAnswer: {
          "@type": "Answer",

          text: answer,
        },
      })
    ),
  };
}

export function breadcrumbSchema(
  items = []
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: `${websiteUrl}${item.href}`,
      })
    ),
  };
}

export function articleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}) {
  return {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: title,

    description,

    image,

    datePublished,

    dateModified,

    author: {
      "@type": "Person",

      name: author,
    },

    publisher: {
      "@type": "Organization",

      name:
        siteConfig.company.name,

      logo: {
        "@type": "ImageObject",

        url: `${websiteUrl}/logo.png`,
      },
    },
  };
}