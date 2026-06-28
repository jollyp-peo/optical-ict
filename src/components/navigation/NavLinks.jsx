"use client";

import Link from "next/link";

import {
  CaretDown,
} from "@phosphor-icons/react";

import {
  publicNavigation,
} from "@/constants";

export default function Links() {
  return (
    <nav
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {publicNavigation.map((item) => {
        const hasChildren =
          item.children?.length;

        if (!hasChildren) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="
                text-sm
                font-medium

                text-slate-900

                transition-colors

                hover:text-slate-950
              "
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className="
              group
              relative
            "
          >
            <button
              className="
                flex
                items-center
                gap-1

                text-sm
                font-medium

                text-slate-700

                transition-colors

                hover:text-slate-950
              "
            >
              {item.label}

              <CaretDown
                size={14}
                className="
                  transition-transform

                  group-hover:rotate-180
                "
              />
            </button>

            {/* Dropdown */}

            <div
              className="
                invisible

                absolute
                left-0
                top-full

                z-50

                w-72

                translate-y-4

                rounded-3xl

                border
                border-slate-900

                bg-white/95
                text-slate-950

                p-3

                opacity-0

                shadow-xl

                backdrop-blur-xl

                transition-all
                duration-200

                group-hover:visible
                group-hover:translate-y-2
                group-hover:opacity-100
              "
            >
              <div
                className="
                  flex
                  flex-col
                "
              >
                {item.children.map(
                  (child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="
                        rounded-2xl

                        px-4
                        py-3

                        text-sm

                        text-slate-700

                        transition-colors

                        hover:bg-purple-500
                        hover:text-purple-700
                      "
                    >
                      {child.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}