"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectShowcase({
  projects,
}) {
  return (
    <div
      className="
        mt-16
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}