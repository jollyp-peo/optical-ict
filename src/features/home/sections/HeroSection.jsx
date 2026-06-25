import Section from "@/components/layout/Section";
import HeroContent from "../components/HeroContent";
import HeroVisual from "../components/HeroVisual";
import SplitSection from "@/components/marketing/SplitSection";

export default function HeroSection() {
  return (
    <Section>
      <SplitSection
        content={<HeroContent />}
        media={<HeroVisual />}
      />
    </Section>
  );
}