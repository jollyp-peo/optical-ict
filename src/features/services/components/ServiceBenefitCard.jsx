export default function ServiceBenefitCard({
  benefit,
}) {
  return (
    <div
      className="
        rounded-2xl

        border
        border-slate-200

        bg-white

        p-6

        shadow-sm
      "
    >
      <h3
        className="
          font-semibold
        "
      >
        {benefit}
      </h3>
    </div>
  );
}