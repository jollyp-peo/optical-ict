import Section from "@/components/layout/Section";

import { services } from "../data/services";

import ServiceCard from "../components/ServiceCard";

export default function ServicesGridSection() {
  return (
    <Section>
      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Section>
  );
}