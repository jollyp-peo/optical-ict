"use client";

import Button from "@/components/ui/Button";
import useBooking from "../hooks/useBooking";

import {
  repairService,
  businessService,
} from "@/features/services/data/services";

export default function BookButton({
  type = "service",
  service,

  children,

  booking = {},

  // Booking-only props
  pickup = false,
  priority,
  projectType,

  onClick,

  ...buttonProps
}) {
  const { openBooking } = useBooking();

  const bookingService =
    service ??
    (type === "repair"
      ? repairService
      : businessService);

  function handleClick(event) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !bookingService
    ) {
      return;
    }

    openBooking({
      ...bookingService,

      ...booking,

      pickup,
      priority,
      projectType,
    });
  }

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
    >
      {children ??
        bookingService?.cta ??
        "Book Now"}
    </Button>
  );
}