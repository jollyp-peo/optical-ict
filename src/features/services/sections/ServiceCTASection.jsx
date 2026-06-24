import Link from "next/link";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function ServiceCTASection({
  service,
}) {
  return (
    <Section>
      <div
        className="
          rounded-[40px]

          bg-gradient-to-br
          from-purple-100
          via-purple-50
          to-sky-50

          p-10
          lg:p-16

          text-center
        "
      >
        <h2
          className="
            text-4xl
            font-bold

            lg:text-6xl
          "
        >
          Ready To Get
          Started?
        </h2>

        <p
          className="
            mx-auto
            mt-6

            max-w-2xl

            text-lg
            text-slate-600
          "
        >
          Let's discuss your
          requirements and
          create the right
          solution for your
          business.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
          >
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}