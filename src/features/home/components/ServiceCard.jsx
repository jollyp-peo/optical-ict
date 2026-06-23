export default function ServiceCard({
  title,
  description,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200

        bg-white/80

        p-5

        backdrop-blur-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h3
        className="
          text-lg
          font-semibold
          text-slate-950
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}