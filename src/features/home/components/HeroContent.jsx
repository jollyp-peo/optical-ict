"use client";

import SectionHeader from "@/components/ui/SectionHeader";

import BookButton from "@/features/booking/components/BookButton";

import { heroContent } from "@/data/home";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <SectionHeader
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        description={heroContent.description}
      />

      <div
        className="
          mt-10
          flex
          flex-wrap
          gap-4
        "
      >
        {/* Primary CTA */}

        <BookButton
          bookingType="REPAIR"
        >
          {heroContent.primaryCta.label}
        </BookButton>

        {/* Secondary CTA */}

        <BookButton
          bookingType="SERVICE" 
          variant="outline"
        >
          {heroContent.secondaryCta.label}
        </BookButton>
      </div>
    </div>
  );
}