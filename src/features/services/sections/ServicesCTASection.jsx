"use client";

import Section from "@/components/layout/Section";
import useBooking from "@/features/booking/hooks/useBooking";
import BookButton from "@/features/booking/components/BookButton";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
        <Link href="/contact">
          <Button size="md">Talk to an IT Expert</Button>
        </Link>

        <BookButton
          variant="secondary"
          bookingType="REPAIR"
        >
          Book a Repair
        </BookButton>
      </div>
    </Section>
  );
}
