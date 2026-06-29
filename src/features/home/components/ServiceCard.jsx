"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ServiceCard({
  service,
}) {
  const {
    title,
    shortDescription,
    description,
    image,
    benefits,
    ctaLabel,
    href = "/services",
  } = service;

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-950">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-950">
          {shortDescription}
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-950">
          {description}
        </p>

        {/* Benefits */}
        {benefits?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {benefits.slice(0, 3).map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-slate-950"
              >
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-6">
          <Link href={href}>
            <Button size="sm" className="w-full">
              {ctaLabel || "Learn More"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}