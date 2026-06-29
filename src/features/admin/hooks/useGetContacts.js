"use client";

import { useQuery } from "@tanstack/react-query";

import { getContactsService } from "../services/contacts.service";

export function useGetContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContactsService,
  });
}