"use client";

import { useMutation } from "@tanstack/react-query";

import { createContactService } from "../services/contact.service";

export function useCreateContact() {
  return useMutation({
    mutationFn: createContactService,
  });
}