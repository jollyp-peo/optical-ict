import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import Breadcrumbs from "../components/Breadcrumbs";

export default function ServiceHeroSection({
  service,
}) {
  return (
    <Section>
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },

          {
            label:
              "Services",

            href: "/services",
          },

          {
            label:
              service.title,
          },
        ]}
      />

      <SectionHeader
        eyebrow="Service"

        title={
          service.title
        }

        description={
          service.description
        }
      />
    </Section>
  );
}