import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { processSteps } from "@/data/home";

import ProcessCard from "../components/ProcessCard";

export default function ProcessSection() {
  return (
    <Section
      containerClassName="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-purple-50
        via-white
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

          bg-purple-300/20

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

          bg-sky-300/20

          blur-3xl
        "
      />

      <SectionHeader
        centered
        eyebrow="How It Works"
        title="A Simple Process From Start To Finish"
        description="
          Whether you need repairs,
          development services or
          enterprise IT support,
          our workflow keeps things
          transparent and efficient.
        "
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

      <div
        className="
          relative
          z-10

          mt-20

          grid
          gap-10

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {processSteps.map((step) => (
          <ProcessCard
            key={step.number}
            step={step}
          />
        ))}
      </div>
    </Section>
  );
}