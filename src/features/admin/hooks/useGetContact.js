"use client";

import { useQuery } from "@tanstack/react-query";

import { getContactService } from "../services/contacts.service";

export function useGetContact(id) {
  return useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactService(id),
    enabled: !!id,
  });
}