"use client";

import { useMutation } from "@tanstack/react-query";

import { trackBookingService } from "../services/booking.service";

export default function useTrackBooking() {
  return useMutation({
    mutationFn: trackBookingService,
  });
}