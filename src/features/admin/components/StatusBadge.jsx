const statusStyles = {
  PENDING: "bg-yellow-100 text-yellow-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
  RESOLVED: "bg-green-100 text-green-700",
  CANCELLED: "bg-slate-100 text-slate-600",
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || "bg-slate-100 text-slate-600";

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-0.5
        text-xs
        font-medium
        ${style}
      `}
    >
      {status?.replace(/_/g, " ")}
    </span>
  );
}