import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ServiceProcessCard from "../components/ServiceProcessCard";

export default function ServiceProcessSection({
  service,
}) {
  return (
    <Section>
      <SectionHeader
        centered
        eyebrow="Process"
        title="How We Work"
      />

      <div
        className="
          mt-16

          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {service.process.map(
          (
            step,
            index
          ) => (
            <ServiceProcessCard
              key={step}
              number={`0${
                index + 1
              }`}
              title={step}
            />
          )
        )}
      </div>
    </Section>
  );
}