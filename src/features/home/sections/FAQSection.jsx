import Link from "next/link";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

import { faqs } from "@/data/home";

import FAQList from "../components/FAQList";

export default function FAQSection() {
  return (
    <Section
      containerClassName="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-purple-900
        via-slate-950
        to-sky-950

        p-8
        lg:p-16
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -left-24
          top-0

          h-96
          w-96

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          grid
          gap-16

          lg:grid-cols-[420px_1fr]
        "
      >
        {/* Left */}

        <div>
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            description="
              Find answers to common
              questions about repairs,
              development services and
              technical support.
            "
            eyebrowClassName="
              border-purple-400/20
              bg-purple-500/10
              text-purple-200
            "
            titleClassName="text-white"
            descriptionClassName="text-slate-300"
          />

          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Right */}

        <FAQList faqs={faqs} />
      </div>
    </Section>
  );
}