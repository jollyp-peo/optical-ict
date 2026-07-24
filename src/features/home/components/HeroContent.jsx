"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";

import BookButton from "@/features/booking/components/BookButton";

import { heroContent } from "@/data/home";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <SectionHeader
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        shortDescription={heroContent.shortDescription}
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

        <Link href="/contact">
          <Button size="md">{heroContent.primaryCta.label}</Button>
        </Link>

        {/* Secondary CTA */}

        <BookButton bookingType="REPAIR" variant="outline">
          {heroContent.secondaryCta.label}
        </BookButton>
      </div>
    </div>
  );
}
