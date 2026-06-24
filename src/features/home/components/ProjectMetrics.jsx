export default function ProjectMetrics({
  results,
}) {
  return (
    <div
      className="
        grid
        gap-4

        sm:grid-cols-3
      "
    >
      {results.map((result) => (
        <div
          key={result.label}
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            p-4

            text-center

            shadow-sm
          "
        >
          <div
            className="
              text-3xl
              font-bold

              text-yellow-500

              [text-shadow:0_0_20px_rgba(250,204,21,0.25)]
            "
          >
            {result.metric}
          </div>

          <div
            className="
              mt-2

              text-xs
              font-medium

              uppercase
              tracking-wider

              text-slate-500
            "
          >
            {result.label}
          </div>
        </div>
      ))}
    </div>
  );
}