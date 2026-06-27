"use client";

import { useMutation } from "@tanstack/react-query";

import { createBookingService } from "../services/booking.service";

export function useCreateBooking() {
  return useMutation({
    mutationFn: createBookingService,
  });
}