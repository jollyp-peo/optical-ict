"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";

import { theme } from "@/constants/theme";
import { cn } from "@/lib/utils/cn";

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

const Button = forwardRef(function Button(
  {
    children,

    variant = "primary",
    size = "md",

    href,
    external = false,

    type = "button",

    fullWidth = false,

    loading = false,
    disabled = false,

    leftIcon,
    rightIcon,

    className = "",

    ...props
  },
  ref
) {
  const classes = cn(
    `
      inline-flex
      items-center
      justify-center
      gap-2

      rounded-xl

      font-medium

      whitespace-nowrap

      transition-all
      duration-300
      ease-out

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-primary
      focus-visible:ring-offset-2

      active:scale-[0.98]

      disabled:pointer-events-none
      disabled:opacity-50
    `,
    theme.ui.button[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading ? (
        <>
          <CircleNotch
            size={18}
            className="animate-spin"
            weight="bold"
          />

          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span
              aria-hidden="true"
              className="flex items-center"
            >
              {leftIcon}
            </span>
          )}

          <span>{children}</span>

          {rightIcon && (
            <span
              aria-hidden="true"
              className="flex items-center"
            >
              {rightIcon}
            </span>
          )}
        </>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          ref={ref}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;