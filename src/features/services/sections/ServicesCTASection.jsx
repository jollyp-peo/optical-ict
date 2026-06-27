"use client";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import useBooking from "@/features/booking/hooks/useBooking";

export default function ServicesCTASection() {
  const { openBooking } = useBooking();

  return (
    <Section>
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
