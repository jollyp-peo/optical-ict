import { services } from "../data/services";

export function getServiceBySlug(
  slug
) {
  return services.find(
    (service) =>
      service.slug === slug
  );
}