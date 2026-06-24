import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { featuredProjects } from "@/data/home";

import ProjectShowcase from "../components/ProjectShowcase";

export default function ProjectsSection() {
  return (
    <Section>
      <SectionHeader
        centered
        eyebrow="Featured Projects"
        title="Real Solutions. Real Results."
        description="
          Explore a selection of projects
          that demonstrate our ability to
          deliver measurable business impact.
        "
      />

      <ProjectShowcase
        projects={featuredProjects}
      />
    </Section>
  );
}