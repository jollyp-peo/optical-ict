import { siteConfig } from "@/config/site";


export const COMPANY_NAME = siteConfig.company.name;
export const COMPANY_EMAIL = siteConfig.company.email;
export const COMPANY_ADDRESS = `${siteConfig.company.address.street}, ${siteConfig.company.address.city}, ${siteConfig.company.address.state}, ${siteConfig.company.address.country} `;
export const COMPANY_PHONE = siteConfig.company.phone;
export const LAST_UPDATED = "June 27, 2026";