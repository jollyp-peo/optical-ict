"use client";

import { theme } from "@/constants/theme";
import { cn } from "@/lib/utils/cn";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-sm",
    lg: "h-14 px-6 text-base",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        `
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          font-medium
          transition-all
          duration-300
          ease-out
          active:scale-[0.98]
          disabled:pointer-events-none
          disabled:opacity-50
        `,
        theme.ui.button[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}