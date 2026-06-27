export const services = [
  {
    id: "computer-repair",

    title: "Repair",

    category: "Repair Services",

    bookingType: "repair",

    serviceType: "computer",

    shortDescription:
      "Professional diagnosis, repair, maintenance, and performance optimization for laptops and desktop computers.",

    benefits: [
      "Hardware Repairs",
      "Virus & Malware Removal",
      "Data Recovery",
    ],

    cta: "Book Computer Repair",
  },

  {
    id: "mobile-repair",

    title: "Mobile Phone Repair",

    category: "Repair Services",

    bookingType: "repair",

    serviceType: "mobile",

    shortDescription:
      "Fast and reliable smartphone repair services including screen replacement, charging issues, battery replacement, and software troubleshooting.",

    benefits: [
      "Screen Replacement",
      "Battery Replacement",
      "Software Repair",
    ],

    cta: "Book Phone Repair",
  },

  {
    id: "web-development",

    title: "Website Development",

    category: "Development",

    bookingType: "development",

    serviceType: "website",

    shortDescription:
      "Modern business websites, corporate platforms, e-commerce solutions, and custom web applications built for growth.",

    benefits: [
      "Business Websites",
      "E-Commerce Solutions",
      "Custom Web Applications",
    ],

    cta: "Book Website Project",
  },

  {
    id: "mobile-development",

    title: "Mobile App Development",

    category: "Development",

    bookingType: "development",

    serviceType: "mobile-app",

    shortDescription:
      "Cross-platform mobile applications designed for performance, scalability, and exceptional user experience.",

    benefits: [
      "Android & iOS Apps",
      "Business Applications",
      "Real-Time Features",
    ],

    cta: "Book App Project",
  },

  {
    id: "networking",

    title: "Networking Solutions",

    category: "Business IT",

    bookingType: "it",

    serviceType: "networking",

    shortDescription:
      "Secure and scalable network infrastructure for offices, schools, and organizations with reliable connectivity.",

    benefits: [
      "Network Design",
      "Wi-Fi Deployment",
      "Network Security",
    ],

    cta: "Book Networking Service",
  },

  {
    id: "managed-it",

    title: "Managed IT Support",

    category: "Business IT",

    bookingType: "it",

    serviceType: "managed-it",

    shortDescription:
      "Comprehensive IT management, proactive monitoring, maintenance, and technical support for businesses.",

    benefits: [
      "Remote Support",
      "On-Site Support",
      "Cybersecurity Protection",
    ],

    cta: "Book IT Support",
  },

  {
    id: "cloud-solutions",

    title: "Cloud Solutions",

    category: "Business IT",

    bookingType: "it",

    serviceType: "cloud",

    shortDescription:
      "Cloud migration, backup strategies, infrastructure optimization, and secure cloud services for modern businesses.",

    benefits: [
      "Cloud Migration",
      "Backup & Recovery",
      "Cloud Security",
    ],

    cta: "Book Cloud Consultation",
  },
];

export const repairService = services.find(
  (service) => service.bookingType === "repair"
);

export const businessService = services.find(
  (service) => service.bookingType === "development"
);