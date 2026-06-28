"use client";

import { useQuery } from "@tanstack/react-query";

import { getBookingsService } from "../services/bookings.service";

export function useGetBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getBookingsService,
  });
}