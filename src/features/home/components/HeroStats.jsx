import Card from "@/components/ui/Card";

export default function HeroStats() {
  const stats = [
    {
      label: "Repairs Completed",
      value: "2,500+",
    },
    {
      label: "Projects Delivered",
      value: "180+",
    },
    {
      label: "Support Tickets Resolved",
      value: "12K+",
    },
  ];

  return (
    <div
      className="
        grid
        gap-4
        sm:grid-cols-3
      "
    >
      {stats.map((stat) => (
        <Card key={stat.label}>
          <p
            className="
              text-3xl
              font-bold
            "
          >
            {stat.value}
          </p>

          <p
            className="
              mt-2
              text-sm
              text-slate-600
            "
          >
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
}