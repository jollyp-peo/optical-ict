"use client";

import Button from "@/components/ui/Button";
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

        <Button
          type="repair"
          size="lg"
        >
          {heroContent.primaryCta.label}
        </Button>

        {/* Secondary CTA */}

        <Button
          type="service"
          size="lg"
          variant="outline"
          booking={{
            requestType: "quote",
          }}
        >
          {heroContent.secondaryCta.label}
        </Button>
      </div>
    </div>
  );
}