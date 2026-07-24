export const services = [
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    category: "Managed Services",
    bookingType: "it",
    serviceType: "managed-it",
    shortDescription:
      "Modern business websites, Cross-platform mobile applications design, Proactive IT management, continuous system monitoring, and strategic technology oversight to ensure your business operates at peak efficiency.",
    benefits: [
      "Proactive System Monitoring",
      "Strategic IT Planning",
      "Vendor & Asset Management",
    ],
    cta: "Explore Managed IT",
  },
  {
    id: "help-desk",
    title: "24/7 Help Desk",
    category: "Support Services",
    bookingType: "it",
    serviceType: "help-desk",
    shortDescription:
      "Round-the-clock technical support providing your team with immediate, expert assistance via remote and on-site channels.",
    benefits: [
      "Remote Troubleshooting",
      "On-Site Escalation",
      "Ticket & Incident Management",
    ],
    cta: "Set Up Help Desk",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    category: "Infrastructure",
    bookingType: "it",
    serviceType: "networking",
    shortDescription:
      "Design, deployment, and optimization of secure, scalable network architectures that deliver seamless connectivity across your organization.",
    benefits: [
      "Network Design & Build",
      "Enterprise Wi-Fi Solutions",
      "Performance Optimization",
    ],
    cta: "Plan Network Infrastructure",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Security",
    bookingType: "it",
    serviceType: "cybersecurity",
    shortDescription:
      "Comprehensive security strategies, real-time threat monitoring, and compliance solutions to safeguard your digital assets and operations.",
    benefits: [
      "Threat Detection & Response",
      "Security Audits & Assessments",
      "Compliance Management",
    ],
    cta: "Strengthen Security",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Cloud Services",
    bookingType: "it",
    serviceType: "cloud",
    shortDescription:
      "End-to-end cloud strategy, seamless migration, and ongoing management to modernize your infrastructure and drive operational agility.",
    benefits: [
      "Cloud Migration & Strategy",
      "Infrastructure Management",
      "Hybrid & Multi-Cloud Solutions",
    ],
    cta: "Start Cloud Journey",
  },
  {
    id: "cctv-access-control",
    title: "CCTV & Access Control",
    category: "Physical Security",
    bookingType: "it",
    serviceType: "security-systems",
    shortDescription:
      "Integrated physical security solutions including surveillance systems, access management, and real-time monitoring for your premises.",
    benefits: [
      "CCTV Installation & Monitoring",
      "Access Control Systems",
      "Remote Surveillance Management",
    ],
    cta: "Secure Your Premises",
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    category: "Data Services",
    bookingType: "it",
    serviceType: "data-recovery",
    shortDescription:
      "Professional recovery and protection solutions for lost, corrupted, or compromised data, ensuring business continuity with minimal downtime.",
    benefits: [
      "Disaster Recovery Planning",
      "Backup Strategy Implementation",
      "Rapid Data Restoration",
    ],
    cta: "Protect Your Data",
  },
  {
    id: "ict-consultancy",
    title: "ICT Consultancy",
    category: "Consulting",
    bookingType: "consulting",
    serviceType: "consultancy",
    shortDescription:
      "Strategic technology consulting to align your IT investments with business objectives, driving digital transformation and operational excellence.",
    benefits: [
      "Digital Transformation Strategy",
      "Technology Roadmaps",
      "Process Optimization",
    ],
    cta: "Book Consultation",
  },
  {
    id: "it-procurement",
    title: "IT Procurement",
    category: "Procurement",
    bookingType: "procurement",
    serviceType: "procurement",
    shortDescription:
      "Strategic sourcing and supply chain management for hardware, software, and IT infrastructure, delivering competitive value and reliability.",
    benefits: [
      "Vendor Negotiation & Sourcing",
      "Asset Lifecycle Management",
      "Bulk & Enterprise Procurement",
    ],
    cta: "Request Procurement Plan",
  },
  {
    id: "corporate-training",
    title: "Corporate IT Training",
    category: "Training",
    bookingType: "training",
    serviceType: "training",
    shortDescription:
      "Customized, hands-on training programs designed to upskill your workforce on emerging technologies and industry best practices.",
    benefits: [
      "Technical Skill Workshops",
      "Certification Preparation",
      "Custom Curriculum Design",
    ],
    cta: "Schedule Training",
  },
  {
    id: "computer-repair",
    title: "Computer Repair",
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
];

export const managedService = services.find(
  (service) => service.serviceType === "managed-it"
);

export const consultingService = services.find(
  (service) => service.serviceType === "consultancy"
);

export const repairService = services.find(
  (service) => service.bookingType === "repair"
);
// export const services = [
//   {
//     id: "computer-repair",
//     title: "Computer Repair",
//     category: "Repair Services",
//     bookingType: "repair",
//     serviceType: "computer",
//     shortDescription:
//       "Professional diagnosis, repair, maintenance, and performance optimization for laptops and desktop computers.",
//     benefits: [
//       "Hardware Repairs",
//       "Virus & Malware Removal",
//       "Data Recovery",
//     ],
//     cta: "Book Computer Repair",
//   },
//   {
//     id: "mobile-repair",
//     title: "Mobile Phone Repair",
//     category: "Repair Services",
//     bookingType: "repair",
//     serviceType: "mobile",
//     shortDescription:
//       "Fast and reliable smartphone repair services including screen replacement, charging issues, battery replacement, and software troubleshooting.",
//     benefits: [
//       "Screen Replacement",
//       "Battery Replacement",
//       "Software Repair",
//     ],
//     cta: "Book Phone Repair",
//   },
//   {
//     id: "file-recovery",
//     title: "File Recovery",
//     category: "Repair Services",
//     bookingType: "repair",
//     serviceType: "file-recovery",
//     shortDescription:
//       "Expert recovery of lost, deleted, corrupted, or inaccessible files from hard drives, SSDs, USB drives, and memory cards.",
//     benefits: [
//       "Deleted File Recovery",
//       "Corrupted Drive Recovery",
//       "Formatted Drive Recovery",
//     ],
//     cta: "Book File Recovery",
//   },
//   {
//     id: "parts-procurement",
//     title: "Parts Procurement",
//     category: "Procurement",
//     bookingType: "procurement",
//     serviceType: "parts",
//     shortDescription:
//       "Sourcing and supply of genuine and compatible replacement parts for computers, mobile devices, and IT equipment.",
//     benefits: [
//       "Genuine OEM Parts",
//       "Compatible Third-Party Options",
//       "Bulk Ordering Available",
//     ],
//     cta: "Request Parts Quote",
//   },
//   {
//     id: "web-development",
//     title: "Website Development",
//     category: "Development",
//     bookingType: "development",
//     serviceType: "website",
//     shortDescription:
//       "Modern business websites, corporate platforms, e-commerce solutions, and custom web applications built for growth.",
//     benefits: [
//       "Business Websites",
//       "E-Commerce Solutions",
//       "Custom Web Applications",
//     ],
//     cta: "Book Website Project",
//   },
//   {
//     id: "mobile-development",
//     title: "Mobile App Development",
//     category: "Development",
//     bookingType: "development",
//     serviceType: "mobile-app",
//     shortDescription:
//       "Cross-platform mobile applications designed for performance, scalability, and exceptional user experience.",
//     benefits: [
//       "Android & iOS Apps",
//       "Business Applications",
//       "Real-Time Features",
//     ],
//     cta: "Book App Project",
//   },
//   {
//     id: "networking",
//     title: "Networking Solutions",
//     category: "Business IT",
//     bookingType: "it",
//     serviceType: "networking",
//     shortDescription:
//       "Secure and scalable network infrastructure for offices, schools, and organizations with reliable connectivity.",
//     benefits: [
//       "Network Design",
//       "Wi-Fi Deployment",
//       "Network Security",
//     ],
//     cta: "Book Networking Service",
//   },
//   {
//     id: "managed-it",
//     title: "Managed IT Support",
//     category: "Business IT",
//     bookingType: "it",
//     serviceType: "managed-it",
//     shortDescription:
//       "Comprehensive IT management, proactive monitoring, maintenance, and technical support for businesses.",
//     benefits: [
//       "Remote Support",
//       "On-Site Support",
//       "Cybersecurity Protection",
//     ],
//     cta: "Book IT Support",
//   },
//   {
//     id: "cloud-solutions",
//     title: "Cloud Solutions",
//     category: "Business IT",
//     bookingType: "it",
//     serviceType: "cloud",
//     shortDescription:
//       "Cloud migration, backup strategies, infrastructure optimization, and secure cloud services for modern businesses.",
//     benefits: [
//       "Cloud Migration",
//       "Backup & Recovery",
//       "Cloud Security",
//     ],
//     cta: "Book Cloud Consultation",
//   },
// ];

// export const repairService = services.find(
//   (service) => service.bookingType === "repair"
// );

// export const businessService = services.find(
//   (service) => service.bookingType === "development"
// );