"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  Wrench,
  Truck,
  Globe,
  Lifebuoy,
  ArrowRight,
} from "@phosphor-icons/react";

import { ctaActions } from "@/data/home";

const icons = {
  "Book Device Repair": Wrench,
  "Request Pickup": Truck,
  "Start A Website Project": Globe,
  "Get IT Support": Lifebuoy,
};

export default function CTASection() {
  return (
    <Section
      containerClassName="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-yellow-400
        via-yellow-300
        to-yellow-500

        p-8
        lg:p-16
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[#FF8C00]/700
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        <SectionHeader
          centered
          eyebrow="Get Started"
          title="Ready To Solve Your Technology Challenges?"
          description="
            Whether you need repairs,
            software development or
            long-term IT support,
            our team is ready to help.
          "
          eyebrowClassName="
            border-white/20
            bg-white/20
            text-slate-950
          "
        />

        <div
          className="
            mt-16

            grid
            gap-6

            md:grid-cols-2
          "
        >
          {ctaActions.map((action) => {
            const Icon = icons[action.title];

            return (
              <Link
                key={action.title}
                href="/services"
                className="block h-full"
              >
                <Button
                  className="
                    block
                    h-full
                    w-full
                    bg-transparent
                    p-0
                  "
                >
                  <div
                    className="
                      group

                      h-full

                      rounded-[28px]

                      border
                      border-white/20

                      bg-white/30

                      p-6

                      backdrop-blur-md

                      transition-all
                      duration-300

                      hover:-translate-y-2
                      hover:bg-white/40
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14

                          items-center
                          justify-center

                          rounded-2xl

                          bg-white

                          text-slate-950
                        "
                      >
                        <Icon size={28} weight="duotone" />
                      </div>

                      <ArrowRight
                        size={22}
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-6

                        text-xl
                        font-bold

                        text-slate-950
                      "
                    >
                      {action.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-slate-700
                      "
                    >
                      {action.description}
                    </p>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}