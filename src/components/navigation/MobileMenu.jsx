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

export default function MobileMenu() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [expanded, setExpanded] =
    useState(null);

  return (
    <>
      {/* Trigger */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          lg:hidden
        "
        aria-label="Open menu"
      >
        <List size={28} />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            bg-slate-950/30

            backdrop-blur-md
          "
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

              border-l
              border-white/20

              bg-white/70

              p-6

              backdrop-blur-2xl
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <h2
                  className="
                    text-lg
                    font-bold
                  "
                >
                  Navigation
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Explore our services
                </p>
              </div>

              <button
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}

            <div
              className="
                mt-10

                flex
                flex-col
                gap-2
                bg-purple-200
              "
            >
              {publicNavigation.map(
                (item) => {
                  const hasChildren =
                    item.children?.length;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() =>
                          setIsOpen(false)
                        }
                        className="
                          rounded-2xl

                          px-4
                          py-3

                          font-medium

                          transition-colors

                          hover:bg-white/50
                        "
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const isExpanded =
                    expanded ===
                    item.label;

                  return (
                    <div
                      key={item.label}
                    >
                      <button
                        onClick={() =>
                          setExpanded(
                            isExpanded
                              ? null
                              : item.label
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between

                          rounded-2xl

                          px-4
                          py-3

                          font-medium

                          transition-colors

                          hover:bg-white/50
                        "
                      >
                        {item.label}

                        <CaretDown
                          size={18}
                          className={`
                            transition-transform
                            duration-300
                            ${
                              isExpanded
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {isExpanded && (
                        <div
                          className="
                            ml-4
                            mt-1

                            flex
                            flex-col
                            gap-1
                          "
                        >
                          {item.children.map(
                            (
                              child
                            ) => (
                              <Link
                                key={
                                  child.href
                                }
                                href={
                                  child.href
                                }
                                onClick={() =>
                                  setIsOpen(
                                    false
                                  )
                                }
                                className="
                                  rounded-xl

                                  px-4
                                  py-3

                                  text-sm
                                  font-medium

                                  text-slate-700

                                  transition-colors

                                  hover:bg-purple-50
                                  hover:text-purple-700
                                "
                              >
                                {
                                  child.label
                                }
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            {/* CTA */}

            <div
              className="
                mt-10
              "
            >
              <Button
                className="w-full"
              >
                Book Repair
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}