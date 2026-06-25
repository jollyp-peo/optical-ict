import GlassCard from "./GlassCard";

export default function StatCard({
  value,
  label,
}) {
  return (
    <GlassCard
      className="
        p-6
      "
    >
      <h3
        className="
          text-4xl
          font-black

          text-purple-700
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2

          text-sm
          font-medium

          text-slate-600
        "
      >
        {label}
      </p>
    </GlassCard>
  );
}