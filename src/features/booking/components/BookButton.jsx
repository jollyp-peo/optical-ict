"use client";

import Button from "@/components/ui/Button";
import { useBooking } from "../context/BookingContext";

export default function BookButton({
  bookingType,
  children,
  ...buttonProps
}) {
  const { openBooking } = useBooking();

  return (
    <Button
      onClick={() => openBooking(bookingType)}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}