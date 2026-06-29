import Section from "@/components/layout/Section";

export default function LegalLayout({ title, children }) {
  return (
    <Section containerClassName=" pb-5">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-950 lg:text-4xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-NG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-6 text-slate-700 leading-7">
          {children}
        </div>
      </div>
    </Section>
  );
}