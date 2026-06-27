"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import LoadingSpinner from "@/components/feedback/LoadingSpinner";

import { useAuth } from "../context/AuthContext";

export default function AdminGuard({
  children,
}) {
  const router = useRouter();

  const {
    user,
    isAuthenticated,
    isInitializing,
  } = useAuth();

  useEffect(() => {
    if (isInitializing) return;

    if (!isAuthenticated) {
      router.replace(
        "/admin/login"
      );

      return;
    }

    if (
      user?.role !== "ADMIN"
    ) {
      router.replace("/");
    }
  }, [
    isAuthenticated,
    isInitializing,
    user,
    router,
  ]);

  if (isInitializing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    !isAuthenticated ||
    user?.role !== "ADMIN"
  ) {
    return null;
  }

  return children;
}