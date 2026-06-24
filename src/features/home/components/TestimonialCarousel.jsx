"use client";

import { useEffect, useState } from "react";

import {
  Star,
  User,
} from "@phosphor-icons/react";

export default function TestimonialCarousel({
  testimonials,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () =>
      clearInterval(interval);
  }, [testimonials.length]);

  const active =
    testimonials[activeIndex];

  return (
    <div className="mx-auto max-w-5xl">
      <div
        className="
          rounded-[40px]

          border
          border-white/20

          bg-white/10

          p-8

          backdrop-blur-md

          lg:p-12
        "
      >
        {/* Stars */}

        <div
          className="
            mb-6

            flex
            gap-2
          "
        >
          {[...Array(5)].map(
            (_, index) => (
              <Star
                key={index}
                size={22}
                weight="fill"
                className="
                  text-white
                "
              />
            )
          )}
        </div>

        {/* WhatsApp Bubble */}

        <div
          className="
            relative

            max-w-3xl

            rounded-[28px]

            bg-white/15

            p-6

            text-lg
            leading-8

            text-white

            backdrop-blur-md
          "
        >
          "{active.quote}"

          <div
            className="
              absolute

              -bottom-3
              left-8

              h-6
              w-6

              rotate-45

              bg-white/15
            "
          />
        </div>

        {/* User */}

        <div
          className="
            mt-10

            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-full

              bg-white/15

              text-white
            "
          >
            <User
              size={22}
              weight="fill"
            />
          </div>

          <div>
            <h3
              className="
                font-semibold
                text-white
              "
            >
              {active.name}
            </h3>

            <p
              className="
                text-sm
                text-white/70
              "
            >
              {active.role}
              {" • "}
              {active.company}
            </p>
          </div>
        </div>

        {/* Avatar Strip */}

        <div
          className="
            mt-10

            flex
            gap-3
          "
        >
          {testimonials.map(
            (item, index) => (
              <button
                key={item.id}
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  transition-all

                  ${
                    activeIndex === index
                      ? `
                        bg-yellow-400
                        text-slate-950
                        scale-110
                      `
                      : `
                        bg-white/15
                        text-white
                      `
                  }
                `}
              >
                <User
                  size={18}
                  weight="fill"
                />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}