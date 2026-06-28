import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { testimonials } from "@/data/home";

import TestimonialCarousel from "../components/TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <Section
    id={"#testimonials"}
      containerClassName="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-purple-900
        via-slate-950
        to-sky-950

        p-8
        lg:p-16
      "
    >
      <div
        className="
          absolute
          -left-24
          top-0

          h-96
          w-96

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        <SectionHeader
          centered
          eyebrow="Client Reviews"
          title="Trusted By Businesses Across Industries"
          description="Real feedback from clients who rely on our technology expertise."
          titleClassName="text-white"
          descriptionClassName="text-slate-300"
          eyebrowClassName="
            border-purple-400/20
            bg-purple-500/10
            text-purple-200
          "
        />

        <div className="mt-16">
          <TestimonialCarousel
            testimonials={
              testimonials
            }
          />
        </div>
      </div>
    </Section>
  );
}