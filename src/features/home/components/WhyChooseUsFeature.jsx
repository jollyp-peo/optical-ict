"use client";
import {
  Lightning,
  Truck,
  ShieldCheck,
  CurrencyDollar,
  Headset,
  Medal,
} from "@phosphor-icons/react";

const icons = {
  lightning: Lightning,
  truck: Truck,
  shield: ShieldCheck,
  money: CurrencyDollar,
  support: Headset,
  award: Medal,
};


export default function WhyChooseUsFeature({
  feature,
}) {
  const Icon = icons[feature.icon];

  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/30

        bg-white/40

        p-6

        backdrop-blur-md

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-[1.03]

        hover:shadow-2xl
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -top-10
            -right-10

            h-40
            w-40

            rounded-full

            bg-yellow-300/40

            blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        <div
          className="
            mb-5

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-purple-100
            to-sky-100

            text-purple-700
          "
        >
          <Icon size={28} weight="duotone" />
        </div>

        <h3
          className="
            text-lg
            font-bold

            text-slate-950
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-3

            leading-7

            text-slate-600
          "
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}