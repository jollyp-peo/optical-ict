"use client";

import { useMutation } from "@tanstack/react-query";

import {
  refreshService,
} from "../services/auth.service";

export function useRefresh() {
  return useMutation({
    mutationFn: refreshService,
  });
}