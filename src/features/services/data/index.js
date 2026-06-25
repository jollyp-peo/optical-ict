import { computerRepair } from "./computerRepair";
import { networking } from "./networking";
import { webDevelopment } from "./webDevelopment";
import { mobileDevelopment } from "./mobileDevelopment";
import { itSupport } from "./itSupport";
import { cloudSolutions } from "./cloudSolutions";

export const services = [
  computerRepair,
  networking,
  webDevelopment,
  mobileDevelopment,
  itSupport,
  cloudSolutions,
];

export const serviceSlugs = services.map(
  (service) => service.slug
);