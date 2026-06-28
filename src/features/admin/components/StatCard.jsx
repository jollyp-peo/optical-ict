"use client";
export function StatCard({ title, value, icon: Icon, colorClass }) {
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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
        </div>
        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            ${colorClass}
          `}
        >
          <Icon size={24} weight="duotone" />
        </div>
      </div>
    </div>
  );
}