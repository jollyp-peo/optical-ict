import Section from "@/components/layout/Section";
import FeatureSplit from "@/components/layout/FeatureSplit";

import ServicesContent from "../components/ServicesContent";
import ServicesVisual from "../components/ServicesVisual";

export default function ServicesSection() {
  return (
    <Section>
      <FeatureSplit
        content={<ServicesContent />}
        media={<ServicesVisual />}
        reverse
      />
    </Section>
  );
}