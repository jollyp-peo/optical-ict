export default function LoadingSpinner({
  size = "md",
}) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div
      className={`
        animate-spin
        rounded-full
        border-2
        border-slate-300
        border-t-yellow-400
        ${sizes[size]}
      `}
    />
  );
}