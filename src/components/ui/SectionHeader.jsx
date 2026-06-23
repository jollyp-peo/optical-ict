import SectionEyebrow from "./SectionEyebrow";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`
        ${
          centered
            ? "mx-auto max-w-3xl text-center"
            : "max-w-3xl"
        }
        ${className}
      `}
    >
      {eyebrow && (
        <div className="mb-4">
          <SectionEyebrow>
            {eyebrow}
          </SectionEyebrow>
        </div>
      )}

      <h2
        className="
          text-4xl
          font-bold
          tracking-tight
          text-slate-950
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}