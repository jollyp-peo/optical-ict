export default function Badge({
  children,
  variant = "default",
}) {
  const variants = {
    default:
      "bg-slate-100 text-slate-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",

    info:
      "bg-sky-100 text-sky-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}