"use client";

import { useState } from "react";
import Link from "next/link";

import {
  List,
  X,
  CaretDown,
} from "@phosphor-icons/react";

import {
  publicNavigation,
} from "@/constants";

import Button from "@/components/ui/Button";
import BookButton from "@/features/booking/components/BookButton";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      {/* Trigger */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          lg:hidden
          cursor-pointer
          touch-manipulation
        "
        aria-label="Open menu"
      >
        <List size={28} className="pointer-events-none" />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[1000]
          "
          style={{
            backgroundColor: "#4444",
            // backdropFilter: "blur(12px)",
            // WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Drawer */}

          <div
            className="
              absolute
              right-0
              top-0
              

              h-full
              w-full
              max-w-sm

              p-6
            "
            style={{
              backgroundColor: "#444444",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(253, 163, 9, 0.95)",
            }}
          >
            {/* Header */}

            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#FFA500">
                  Menu
                </h2>
                <p className="text-sm text-[#FFA500]">
                  Explore our services
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Links */}

            <div className="mt-10 flex flex-col gap-1">
              {publicNavigation.map((item) => {
                const hasChildren =
                  Array.isArray(item.children) &&
                  item.children.length > 0;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        rounded-xl
                        px-4
                        py-3
                        border-b
                        border-white
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        duration-200
                        hover:bg-yellow-50
                        hover:text-yellow-700
                      "
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isExpanded = expanded === item.label;

                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setExpanded(isExpanded ? null : item.label)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        border-b
                        border-white
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        duration-200
                        hover:bg-yellow-50
                        hover:text-yellow-700
                      "
                    >
                      {item.label}

                      <CaretDown
                        size={18}
                        className={`
                          transition-transform
                          duration-300
                          ${isExpanded ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    {isExpanded && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="
                              rounded-xl
                              px-4
                              py-3
                              text-sm
                              font-medium
                              text-slate-600
                              transition-colors
                              duration-200
                              hover:bg-yellow-50
                              hover:text-yellow-700
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}

            <div className="mt-10 space-y-3">
              <BookButton
                bookingType="REPAIR"
                fullWidth
                variant="primary"
              >
                Book Repair
              </BookButton>

              <BookButton
                bookingType="SERVICE"
                fullWidth
                variant="outline"
              >
                Book Service
              </BookButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}