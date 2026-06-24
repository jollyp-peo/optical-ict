"use client";

import { useState } from "react";

import Image from "next/image";

import Button from "@/components/ui/Button";

import ProjectMetrics from "./ProjectMetrics";

export default function ProjectShowcase({
  projects,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeProject =
    projects[activeIndex];

  return (
    <div
      className="
        mt-16

        grid
        gap-8

        lg:grid-cols-[280px_1fr]
      "
    >
      {/* Project Tabs */}

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {projects.map(
          (project, index) => (
            <button
              key={project.id}
              onClick={() =>
                setActiveIndex(index)
              }
              className={`
                rounded-2xl

                border

                p-5

                text-left

                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? `
                      border-purple-300

                      bg-gradient-to-r
                      from-purple-50
                      to-sky-50

                      shadow-lg
                    `
                    : `
                      border-slate-200
                      bg-white

                      hover:border-purple-100
                    `
                }
              `}
            >
              <div
                className="
                  text-xs

                  uppercase
                  tracking-wider

                  text-purple-600
                "
              >
                {project.category}
              </div>

              <div
                className="
                  mt-2

                  font-semibold
                "
              >
                {project.title}
              </div>
            </button>
          )
        )}
      </div>

      {/* Active Project */}

      <div
        className="
          overflow-hidden

          rounded-[32px]

          border
          border-slate-200

          bg-white

          shadow-sm
        "
      >
        <div className="relative">
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            width={1600}
            height={900}
            className="
              h-[400px]
              w-full
              object-cover
            "
          />
        </div>

        <div
          className="
            p-8
            lg:p-10
          "
        >
          <div
            className="
              inline-flex

              rounded-full

              bg-purple-100

              px-4
              py-2

              text-sm
              font-medium

              text-purple-700
            "
          >
            {activeProject.category}
          </div>

          <h3
            className="
              mt-6

              text-3xl
              font-bold

              tracking-tight

              lg:text-5xl
            "
          >
            {activeProject.title}
          </h3>

          <p
            className="
              mt-6

              max-w-3xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            {activeProject.description}
          </p>

          <div className="mt-10">
            <ProjectMetrics
              results={
                activeProject.results
              }
            />
          </div>

          <div className="mt-10">
            <Button size="lg">
              {
                activeProject.ctaLabel
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}