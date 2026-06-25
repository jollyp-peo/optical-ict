"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";

import Button from "@/components/ui/Button";
import HeroSurface from "@/components/ui/HeroSurface";
import GlassCard from "@/components/ui/GlassCard";

import Breadcrumbs from "./Breadcrumbs";
import { heroHighlights } from "../constants/heroHighlights";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
    },
  }),
};

export default function ServiceHero({ service }) {
  const breadcrumbItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: service.title,
    },
  ];

  return (
    <HeroSurface className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-44
            top-20

            h-80
            w-80

            rounded-full

            bg-primary/15

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0

            h-80
            w-80

            rounded-full

            bg-secondary/20

            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-24

            h-64
            w-64

            -translate-x-1/2

            rounded-full

            bg-accent/10

            blur-3xl
          "
        />

      </div>

      <div className="relative">

        <Breadcrumbs
          className="mb-10"
          items={breadcrumbItems}
        />

        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-primary/20

                bg-primary/10

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              {service.category}
            </span>

            <h1
              className="
                mt-6

                text-4xl
                font-bold
                tracking-tight

                text-slate-950

                md:text-5xl
                lg:text-6xl
              "
            >
              {service.title}
            </h1>

            <p
              className="
                mt-8

                max-w-2xl

                text-lg
                leading-8

                text-slate-600
              "
            >
              {service.description}
            </p>

            <div
              className="
                mt-10

                flex
                flex-wrap

                gap-4
              "
            >
              <Button
                href="/contact"
                size="lg"
                rightIcon={
                  <ArrowRight
                    weight="bold"
                    size={18}
                  />
                }
              >
                Get Started
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Talk to an Expert
              </Button>
            </div>

            <div
              className="
                mt-12

                grid
                gap-6

                sm:grid-cols-3
              "
            >
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2 + index * 0.1}
                  className="flex gap-3"
                >
                  <CheckCircle
                    size={22}
                    weight="fill"
                    className="
                      mt-1
                      shrink-0
                      text-primary
                    "
                  />

                  <div>
                    <h3
                      className="
                        font-semibold
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1

                        text-sm
                        leading-6

                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            <GlassCard
              hover={false}
              className="p-8 lg:p-10"
            >

              <div className="space-y-8">

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase

                      tracking-[0.2em]

                      text-primary
                    "
                  >
                    Why Businesses Choose Us
                  </p>

                  <h2
                    className="
                      mt-4

                      text-3xl
                      font-bold

                      text-slate-950
                    "
                  >
                    Reliable Solutions.
                    <br />
                    Measurable Results.
                  </h2>

                </div>

                <div className="space-y-4">

                  {service.features?.slice(0, 5).map(
                    (feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-start

                          gap-3

                          rounded-2xl

                          border
                          border-slate-200

                          bg-white/70

                          p-4
                        "
                      >
                        <CheckCircle
                          size={20}
                          weight="fill"
                          className="
                            mt-0.5
                            shrink-0
                            text-primary
                          "
                        />

                        <span className="text-slate-700">
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

                <div
                  className="
                    grid
                    grid-cols-3

                    gap-4

                    border-t
                    border-slate-200

                    pt-6
                  "
                >
                  {[
                    ["100+", "Projects"],
                    ["98%", "Satisfaction"],
                    ["24/7", "Support"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <div
                        className="
                          text-3xl
                          font-bold
                          text-slate-950
                        "
                      >
                        {value}
                      </div>

                      <p
                        className="
                          mt-1

                          text-sm

                          text-slate-600
                        "
                      >
                        {label}
                      </p>

                    </div>
                  ))}
                </div>

              </div>

            </GlassCard>
          </motion.div>

        </div>

      </div>

    </HeroSurface>
  );
}