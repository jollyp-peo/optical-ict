"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  CaretRight,
} from "@phosphor-icons/react";

import Button from "@/components/ui/Button";
import HeroSurface from "@/components/ui/HeroSurface";
import GlassCard from "@/components/ui/GlassCard";

import { heroHighlights } from "../constants/heroHighlights";

export default function ServiceHero({ service }) {
  return (
    <HeroSurface className="relative overflow-hidden">
      {/* Background Decorations */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

        <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Breadcrumb */}

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="transition hover:text-primary"
          >
            Home
          </Link>

          <CaretRight size={14} />

          <Link
            href="/services"
            className="transition hover:text-primary"
          >
            Services
          </Link>

          <CaretRight size={14} />

          <span className="font-medium text-slate-900">
            {service.title}
          </span>
        </motion.nav>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* Badge */}

            <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {service.category}
            </div>

            {/* Heading */}

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {service.description}
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/contact"
                size="lg"
              >
                Get Started

                <ArrowRight
                  size={18}
                  weight="bold"
                />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Trust Highlights */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: item.id * 0.12,
                  }}
                  className="flex gap-3"
                >
                  <CheckCircle
                    size={22}
                    weight="fill"
                    className="mt-1 text-primary"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <GlassCard className="overflow-hidden p-8">

              <div className="space-y-8">

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Why Businesses Choose Us
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-slate-950">
                    Reliable Solutions.
                    <br />
                    Measurable Results.
                  </h2>
                </div>

                <div className="grid gap-4">
                  {service.features?.slice(0, 5).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4"
                    >
                      <CheckCircle
                        size={22}
                        weight="fill"
                        className="mt-0.5 text-primary"
                      />

                      <span className="text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">

                  <div>
                    <div className="text-3xl font-bold text-slate-950">
                      100+
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      Projects
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-slate-950">
                      98%
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      Satisfaction
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-slate-950">
                      24/7
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      Support
                    </div>
                  </div>

                </div>

              </div>

            </GlassCard>
          </motion.div>

        </div>
      </div>
    </HeroSurface>
  );
}