"use client";

import Section from "@/components/layout/Section";
import useBooking from "@/features/booking/hooks/useBooking";
import BookButton from "@/features/booking/components/BookButton";

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
        <BookButton
          bookingType="REPAIR"
          variant="primary"
        >
          Book a Repair
        </BookButton>

        <BookButton
          variant="secondary"
          bookingType="SERVICE"
        >
          Book a Service
        </BookButton>
      </div>
    </Section>
  );
}
