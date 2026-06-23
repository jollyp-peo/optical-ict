import Image from "next/image";

import { images } from "@/constants";

export default function ServicesVisual() {
  return (
    <div className="relative h-full">
      <Image
        src={images.services.development}
        alt="Technology services"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}