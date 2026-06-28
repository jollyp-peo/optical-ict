export const siteConfig = {
  company: {
    name: "Optimal ICT Productive Tech",

    shortName: "Optimal ICT",

    legalName: "Optimal ICT Productive Tech",

    tagline:
      "Repair. Support. Build. Scale.",

    description:
      "Professional laptop repair, mobile phone repair, website development, mobile application development, networking, corporate IT support, managed technology services, and device pickup solutions.",

    founded: "2018",

    email: "support@optimalict.com.ng",

    supportEmail: "help@optimalict.com.ng",

    salesEmail: "sales@optimalict.com.ng",

    phone: "+2348076157744",

    whatsapp: "+2348076157744",

    address: {
      street: "12 Saka Tinubu Street",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      postalCode: "101241",
    },
  },

  urls: {
    website:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://optimalict.com.ng",

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
      "Optimal ICT Productive Tech",

    titleTemplate:
      "%s | Optimal ICT Productive Tech",

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

    author: "Optimal ICT Productive Tech",

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