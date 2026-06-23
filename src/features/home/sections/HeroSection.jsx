import Section from "@/components/layout/Section";
import FeatureSplit from "@/components/layout/FeatureSplit";

import HeroContent from "../components/HeroContent";
import HeroVisual from "../components/HeroVisual";

export default function HeroSection() {
  return (
    <Section>
      <FeatureSplit
        content={<HeroContent />}
        media={<HeroVisual />}
      />
    </Section>
  );
}