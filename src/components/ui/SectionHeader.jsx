export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow && (
        <span
          className="
            mb-3
            inline-block
            rounded-full
            bg-yellow-100
            px-3
            py-1
            text-sm
            font-medium
            text-yellow-700
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          text-3xl
          font-bold
          tracking-tight
          text-slate-900
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-4
            text-lg
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}