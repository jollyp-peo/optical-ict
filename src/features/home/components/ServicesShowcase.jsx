"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesShowcase({
  services,
}) {
  return (
    <div
      className="
        mt-12
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}