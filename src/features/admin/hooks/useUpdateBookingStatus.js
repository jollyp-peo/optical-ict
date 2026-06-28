"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBookingStatusService } from "../services/bookings.service";

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reference, status }) => updateBookingStatusService(reference, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}