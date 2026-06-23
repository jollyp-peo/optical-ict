import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { companyStats } from "@/data/home";

import StatCard from "../components/StatCard";

export default function StatsSection() {
  return (
    <Section>
      <div
        className="
          relative
          overflow-hidden

          rounded-[40px]

          bg-slate-950

          px-8
          py-16

          lg:px-16
          lg:py-24
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0

            h-96
            w-96

            -translate-x-1/2

            rounded-full

            bg-purple-500/20

            blur-3xl
          "
        />

        <div className="relative z-10">
          <SectionHeader
            centered
            eyebrow="Impact"
            title="Trusted By Businesses And Individuals"
            description="
              Our results speak for themselves.
            "
            titleClassName="text-white"
            descriptionClassName="text-slate-200"
            eyebrowClassName="
              border-purple-400/20
              bg-purple-500/10
              text-purple-200
            "
          />

          <div
            className="
              mt-20

              grid
              gap-12

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {companyStats.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}