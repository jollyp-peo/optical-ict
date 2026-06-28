import Image from "next/image";

import Button from "@/components/ui/Button";

import { images } from "@/constants";
import { heroContent } from "@/data/home";

import HeroTrustIndicators from "./HeroTrustIndicators";

export default function HeroVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-l-[80px]">
      <Image
        src={images.hero.light}
        alt="Technology solutions"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className="object-cover"
      />

      {/* Blend Overlay */}
      <div
        className="
          absolute
          inset-y-0
          left-0
      
          w-64
      
          bg-gradient-to-r
          from-white
          via-white/80
          to-transparent
        "
      />

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          h-64
          w-64
          rounded-full
          bg-purple-400/20
          blur-3xl
        "
      />

      {/* Yellow Glow */}
      <div
        className="
          absolute
          -bottom-16
          -left-16
          h-64
          w-64
          rounded-full
          bg-yellow-300/20
          blur-3xl
        "
      />

      {/* Floating Trust Indicators */}
      <div
        className="
    absolute
    bottom-8
    left-1/2
    z-20
    w-full
    max-w-xs
    -translate-x-1/2
    px-4
    sm:left-8
    sm:right-8
    sm:w-auto
    sm:max-w-none
    sm:translate-x-0
  "
      >
        <HeroTrustIndicators items={heroContent.trustIndicators} />
      </div>
    </div>
  );
}
