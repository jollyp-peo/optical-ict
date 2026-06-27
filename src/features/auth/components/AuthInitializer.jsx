"use client";

import { useEffect } from "react";

import { meService } from "../services/auth.service";
import { useRefresh } from "../hooks/useRefresh";
import { useAuth } from "../context/AuthContext";

export default function AuthInitializer({
  children,
}) {
  const refresh =
    useRefresh();

  const {
    login,
    logout,
    finishInitialization,
  } = useAuth();

  useEffect(() => {
    let mounted = true;

    async function initialize() {
      try {
        const {
          accessToken,
        } =
          await refresh.mutateAsync();

        const me =
          await meService(
            accessToken,
          );

        if (!mounted) return;

        login({
          user: me,
          accessToken,
        });
      } catch {
        if (mounted) {
          logout();
        }
      } finally {
        if (mounted) {
          finishInitialization();
        }
      }
    }

    initialize();

    return () => {
      mounted = false;
    };
  }, []);

  return children;
}