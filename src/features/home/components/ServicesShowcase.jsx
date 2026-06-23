"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import Button from "@/components/ui/Button";

export default function ServicesShowcase({
  services,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeService =
    services[activeIndex];

  return (
    <div
      className="
        mt-12
        grid
        gap-8

        lg:grid-cols-[340px_1fr]
      "
    >
      {/* Navigation */}

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {services.map(
          (service, index) => (
            <button
              key={service.id}
              onClick={() =>
                setActiveIndex(index)
              }
              className={`
                rounded-2xl
                border
                p-5
                text-left

                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? `
                      border-purple-300

                      bg-gradient-to-r
                      from-purple-50
                      to-sky-50

                      shadow-xl

                      scale-[1.02]
                    `
                    : `
                      border-slate-200
                      bg-white

                      hover:border-purple-100
                      hover:bg-slate-50
                    `
                }
              `}
            >
              <h3
                className="
                  font-semibold
                  text-slate-950
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-600
                "
              >
                {
                  service.shortDescription
                }
              </p>
            </button>
          )
        )}
      </div>

      {/* Active Service Panel */}

      <div
        className="
          relative

          min-h-[700px]

          overflow-hidden
          rounded-[32px]
        "
      >
        {/* Background Image */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.image}
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="
                object-cover
              "
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-black/55
          "
        />

        {/* Blur Overlay */}

        <div
          className="
            absolute
            inset-0

            backdrop-blur-[2px]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-purple-950/40
            via-slate-950/50
            to-sky-950/40
          "
        />

        {/* Content */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              z-10

              flex
              h-full
              flex-col
              justify-center

              p-8
              lg:p-12
            "
          >
            <h3
              className="
                text-4xl
                font-bold
                tracking-tight

                text-white

                lg:text-6xl
              "
            >
              {activeService.title}
            </h3>

            <p
              className="
                mt-6

                max-w-4xl

                text-lg
                leading-8

                text-slate-200
              "
            >
              {
                activeService.description
              }
            </p>

            <div
              className="
                mt-10

                grid
                gap-4

                sm:grid-cols-2
              "
            >
              {activeService.benefits.map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-xl

                      border
                      border-white/10

                      bg-white/10

                      p-4

                      backdrop-blur-md
                    "
                  >
                    <div
                      className="
                        h-2
                        w-2

                        rounded-full

                        bg-yellow-400
                      "
                    />

                    <span
                      className="
                        text-white
                      "
                    >
                      {benefit}
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="mt-10">
              <Button size="lg">
                {
                  activeService.ctaLabel
                }
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}