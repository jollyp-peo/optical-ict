import StatCard from "./StatCard";

export default function HeroStats({
  stats,
}) {
  return (
    <div
      className="
        mt-10

        grid
        gap-5

        grid-cols-3
      "
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}