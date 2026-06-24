import Section from "@/components/layout/Section";

import ServiceBenefitCard from "../components/ServiceBenefitCard";

export default function ServiceBenefitsSection({
  service,
}) {
  return (
    <Section>
      <div
        className="
          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {service.benefits.map(
          (benefit) => (
            <ServiceBenefitCard
              key={benefit}
              benefit={
                benefit
              }
            />
          )
        )}
      </div>
    </Section>
  );
}