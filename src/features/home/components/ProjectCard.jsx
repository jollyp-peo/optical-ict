"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import ProjectMetrics from "./ProjectMetrics";

export default function ProjectCard({
  project,
}) {
  const {
    title,
    category,
    description,
    image,
    results,
    ctaLabel = "View Case Study",
  } = project;

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Category Badge */}
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-purple-100
            px-3
            py-1.5
            text-xs
            font-medium
            text-purple-700
          "
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        {/* Metrics */}
        <div className="mt-6">
          <ProjectMetrics results={results} />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Button size="sm" className="w-full">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}