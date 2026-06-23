import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { whyChooseUs } from "@/data/home";

import WhyChooseUsFeature from "../components/WhyChooseUsFeature";

export default function WhyChooseUsSection() {
  return (
    <Section
      containerClassName="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-purple-100
        via-purple-50
        to-sky-50

        p-8
        lg:p-16
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          -left-24
          top-0

          h-96
          w-96

          rounded-full

          bg-purple-400/20

          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-24
          bottom-0

          h-96
          w-96

          rounded-full

          bg-sky-400/20

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          grid
          gap-16

          lg:grid-cols-[420px_1fr]
          lg:items-start
        "
      >
        {/* Left Column */}

        <div className="sticky top-24">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={whyChooseUs.title}
            description={whyChooseUs.description}
            eyebrowClassName="
              border-purple-200
              bg-purple-100
              text-purple-700
            "
            titleClassName="
              drop-shadow-sm
              [text-shadow:0_0_20px_rgba(167,139,250,0.15)]
            "
          />
        </div>

        {/* Right Column */}

        <div
          className="
            grid
            gap-6

            md:grid-cols-2
          "
        >
          {whyChooseUs.features.map(
            (feature) => (
              <WhyChooseUsFeature
                key={feature.title}
                feature={feature}
              />
            )
          )}
        </div>
      </div>
    </Section>
  );
}