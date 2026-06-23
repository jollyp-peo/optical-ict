import Section from "@/components/layout/Section";

import { trustedBrands } from "@/data/home";

export default function TrustedClientsSection() {
  return (
    <Section
      className="
        py-10
        lg:py-16
      "
    >
      <div
        className="
          text-center
        "
      >
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-slate-500
          "
        >
          Trusted Technologies &
          Platforms
        </p>
      </div>

      <div
        className="
          mt-10

          grid
          grid-cols-2
          gap-4

          md:grid-cols-3

          lg:grid-cols-6
        "
      >
        {trustedBrands.map((brand) => (
          <div
            key={brand.name}
            className="
              flex
              h-20
              items-center
              justify-center

              rounded-2xl

              border
              border-slate-200

              bg-white

              text-sm
              font-semibold

              text-slate-700

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {brand.name}
          </div>
        ))}
      </div>
    </Section>
  );
}