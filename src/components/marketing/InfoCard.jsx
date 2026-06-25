import GlassCard from "./GlassCard";

import Icon from "@/components/ui/Icon";

export default function InfoCard({
  icon,
  title,
  description,
}) {
  return (
    <GlassCard
      className="
        p-8
      "
    >
      <div
        className="
          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-purple-100
          to-sky-100

          text-purple-700
        "
      >
        <Icon
          icon={icon}
          size={30}
        />
      </div>

      <h3
        className="
          mt-6

          text-xl
          font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4

          leading-7

          text-slate-600
        "
      >
        {description}
      </p>
    </GlassCard>
  );
}