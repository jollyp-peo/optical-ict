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
      <div
        className="
    mt-10

    flex
    flex-wrap
    justify-center

    gap-4
  "
      >
        <Button
          size="lg"
          onClick={() =>
            openBooking({
              id: "computer-repair",
              title: "Computer Repair",
              bookingType: "repair",
              serviceType: "computer",
            })
          }
        >
          Book a Repair
        </Button>

        <Button
          size="lg"
          variant="secondary"
          onClick={() =>
            openBooking({
              id: "website-development",
              title: "Website Development",
              bookingType: "development",
              serviceType: "website",
            })
          }
        >
          Book a Service
        </Button>
      </div>
    </Section>
  );
}
