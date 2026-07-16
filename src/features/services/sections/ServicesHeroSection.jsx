"use client";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import useBooking from "@/features/booking/hooks/useBooking";

export default function ServicesHeroSection() {
  const { openBooking } = useBooking();
  return (
    <Section>
      <SectionHeader
        centered
        eyebrow="Our Services"
        title="
          Technology Solutions
          Built For Growth
        "
        description="
          From computer repairs and
          networking to software
          development and managed IT
          services, we help businesses
          operate efficiently and scale
          with confidence.
        "
      />
    </Section>
  );
}
