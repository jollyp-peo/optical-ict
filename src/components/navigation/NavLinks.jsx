"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { publicNavigation } from "@/constants";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      className="
        hidden
        items-center
        gap-1

        lg:flex
      "
      aria-label="Main navigation"
    >
      {publicNavigation.map((item) => {
        const isActive = pathname === item.href;

        // Parent item with children — no href, render label + dropdown
        if (item.children && !item.href) {
          return (
            <div
              key={item.label}
              className="group relative"
            >
              <button
                type="button"
                className="
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-200
                  hover:text-yellow-600
                "
              >
                {item.label}
              </button>
            {/* company children */}
              <div
                className="
                  invisible
                  absolute
                  left-0
                  top-full
                  mt-2
                  w-56
                  rounded-xl
                  border
                  border-slate-200
                  bg-purple-950
                  p-2
                  opacity-0
                  shadow-lg
                  transition-all
                  duration-200
                  group-hover:visible
                  group-hover:opacity-100
                "
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="
                      block
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      hover:bg-yellow-50
                      hover:text-yellow-700
                    "
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        // Regular link
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`
              relative
              rounded-lg
              px-4
              py-2
              text-sm
              font-medium
              transition-colors
              duration-200
              ${isActive
                ? "text-yellow-600"
                : "text-slate-700 hover:text-yellow-600"
              }
            `}
            style={{
              color: isActive ? "var(--color-primary)" : undefined,
            }}
          >
            {item.label}
            {isActive && (
              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-0.5
                  w-4
                  -translate-x-1/2
                  rounded-full
                "
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}