export const siteConfig = {
  company: {
    name: "Optimal ICT Solutions",

    shortName: "Optimal ICT",

    legalName: "Optimal ICT Solutions Limited",

    tagline:
      "Repair. Support. Build. Scale.",

    description:
      "Professional laptop repair, mobile phone repair, website development, mobile application development, networking, corporate IT support, managed technology services, and device pickup solutions.",

    founded: "2026",

    email: "support@optimalict.com",

    supportEmail: "help@optimalict.com",

    salesEmail: "sales@optimalict.com",

    phone: "+234XXXXXXXXXX",

    whatsapp: "+234XXXXXXXXXX",

    address: {
      street: "",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      postalCode: "",
    },
  },

  urls: {
    website:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://optimalict.com",

    dashboard:
      "/dashboard",

    admin:
      "/admin",
  },

  socials: {
    facebook: "",

    instagram: "",

    linkedin: "",

    twitter: "",

    youtube: "",

    whatsapp: "",
  },

  seo: {
    defaultTitle:
      "Optimal ICT Solutions",

    titleTemplate:
      "%s | Optimal ICT Solutions",

    defaultDescription:
      "Professional device repair, IT support, networking, website development and mobile application development services.",

    keywords: [
      "Laptop Repair",
      "Phone Repair",
      "Website Development",
      "Mobile App Development",
      "Corporate IT Support",
      "Networking",
      "Software Installation",
      "Managed IT Services",
      "Device Tracking",
      "Technology Consulting",
    ],

    author: "Optimal ICT Solutions",

    locale: "en_NG",

    type: "website",
  },

  contact: {
    supportHours: {
      weekdays:
        "08:00 AM - 06:00 PM",

      saturday:
        "09:00 AM - 04:00 PM",

      sunday:
        "Closed",
    },
  },

  whatsapp: {
    defaultMessage:
      "Hello, I would like to make an enquiry about your services.",

    repairMessage:
      "Hello, I would like to request a device repair.",

    supportMessage:
      "Hello, I would like IT support assistance.",

    quoteMessage:
      "Hello, I would like a project quotation.",
  },

  features: {
    repairTracking: true,

    pickupService: true,

    billing: true,

    notifications: true,

    whatsapp: true,

    customerDashboard: true,

    adminDashboard: true,
  },
};