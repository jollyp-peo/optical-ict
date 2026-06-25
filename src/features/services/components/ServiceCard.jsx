"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

import Button from "@/components/ui/Button";
import GlassCard from "@/components/marketing/GlassCard";

export default function ServiceCard({
  service,
}) {
  const benefits =
    service.benefits?.slice(0, 3) ?? [];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <GlassCard
        className="
          flex
          h-full
          flex-col

          p-8
        "
      >
        {/* Category */}

        {service.category && (
          <span
            className="
              inline-flex
              w-fit

              rounded-full

              bg-primary/10

              px-3
              py-1.5

              text-sm
              font-medium

              text-primary
            "
          >
            {service.category}
          </span>
        )}

        {/* Title */}

        <h3
          className="
            mt-5

            text-2xl
            font-bold

            tracking-tight

            text-slate-950
          "
        >
          {service.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            flex-1

            leading-7

            text-slate-600
          "
        >
          {service.shortDescription}
        </p>

        {/* Benefits */}

        {!!benefits.length && (
          <div
            className="
              mt-8

              space-y-3
            "
          >
            {benefits.map((benefit, index) => {
              const title =
                typeof benefit === "string"
                  ? benefit
                  : benefit.title;

              return (
                <div
                  key={title ?? index}
                  className="
                    flex
                    items-start

                    gap-3
                  "
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="
                      mt-1
                      shrink-0

                      text-primary
                    "
                  />

                  <span
                    className="
                      text-sm

                      text-slate-700
                    "
                  >
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}

        <div className="mt-10">
          <Button
            href={`/services/${service.slug}`}
            fullWidth
            rightIcon={
              <ArrowRight
                size={18}
                weight="bold"
              />
            }
          >
            book a service now
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  );
}