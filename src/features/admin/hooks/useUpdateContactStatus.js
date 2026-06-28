"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateContactStatusService } from "../services/contacts.service";

export function useUpdateContactStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }) => updateContactStatusService(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}