"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function TestimonialCarousel({
  testimonials,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      goToNext();
    }, 6000); // 6 seconds — slow and comfortable

    return () => clearInterval(intervalRef.current);
  }, [isPaused, goToNext]);

  const handleManualNav = (action) => {
    setIsPaused(true);
    action();
    // Resume auto-play after 10 seconds of inactivity
    clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div 
      className="mx-auto max-w-5xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <div className="relative">
        {/* Left Chevron */}
        <button
          type="button"
          onClick={() => handleManualNav(goToPrev)}
          className="
            absolute
            left-0
            top-1/2
            z-10

            -translate-y-1/2
            -translate-x-2

            rounded-full

            bg-white/10
            p-2

            transition-all
            hover:bg-white/20

            lg:-translate-x-14
          "
          aria-label="Previous review"
        >
          <CaretLeft size={28} weight="bold" className="text-white" />
        </button>

        {/* Right Chevron */}
        <button
          type="button"
          onClick={() => handleManualNav(goToNext)}
          className="
            absolute
            right-0
            top-1/2
            z-10

            -translate-y-1/2
            translate-x-2

            rounded-full

            bg-white/10
            p-2

            transition-all
            hover:bg-white/20

            lg:translate-x-14
          "
          aria-label="Next review"
        >
          <CaretRight size={28} weight="bold" className="text-white" />
        </button>

        <div
          className="
            overflow-hidden

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
          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                weight="fill"
                className="text-yellow-400"
              />
            ))}
          </div>

          {/* Slow Sliding Track */}
          <div className="overflow-hidden">
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-in-out
              "
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  {/* WhatsApp Dialog Bubble */}
                  <div className="relative max-w-3xl">
                    <div
                      className="
                        relative

                        rounded-[24px]

                        bg-[#dcf8c6]/90

                        p-6
                        lg:p-8

                        shadow-lg
                      "
                    >
                      <span
                        className="
                          absolute
                          top-3
                          left-4

                          font-serif
                          text-5xl
                          leading-none

                          text-[#FF8C00]
                        "
                      >
                        "
                      </span>

                      <p
                        className="
                          relative
                          z-10

                          px-4

                          text-lg
                          italic
                          leading-8

                          text-slate-800
                        "
                      >
                        {testimonial.quote}
                      </p>

                      <span
                        className="
                          absolute
                          bottom-1
                          right-5

                          rotate-180

                          font-serif
                          text-5xl
                          leading-none

                          text-[#FF8C00]
                        "
                      >
                        "
                      </span>
                    </div>

                    {/* WhatsApp Bubble Tail */}
                    <div
                      className="
                        absolute
                        -bottom-2
                        left-8

                        h-4
                        w-4

                        rotate-45

                        bg-[#dcf8c6]/90
                      "
                    />
                  </div>

                  {/* User Info */}
                  <div className="mt-10 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-full

                        bg-white/15

                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-white/70">
                        {testimonial.role}
                        {" • "}
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bullet Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleManualNav(() => goTo(index))}
                className={`
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeIndex === index
                      ? `
                        h-2.5
                        w-8

                        bg-yellow-400
                      `
                      : `
                        h-2.5
                        w-2.5

                        bg-white/30

                        hover:bg-white/50
                      `
                  }
                `}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}