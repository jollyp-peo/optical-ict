"use client";

import { useQuery } from "@tanstack/react-query";

import { getBookingService } from "../services/bookings.service";

export function useGetBooking(reference) {
  return useQuery({
    queryKey: ["bookings", reference],
    queryFn: () => getBookingService(reference),
    enabled: !!reference,
  });
}