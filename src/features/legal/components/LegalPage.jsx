import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function LegalPage({ title, description, children }) {
  return (
    <Section containerClassName=" pb-5">
      <SectionHeader
        centered
        eyebrow="Legal"
        title={title}
        description={description}
      />

      <article className="prose prose-slate mx-auto mt-16 max-w-3xl">
        {children}
      </article>
    </Section>
  );
}