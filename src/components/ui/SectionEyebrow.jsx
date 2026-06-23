export default function SectionEyebrow({
  children,
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-yellow-200
        bg-yellow-50
        px-4
        py-2
        text-sm
        font-medium
        text-yellow-700
      "
    >
      {children}
    </span>
  );
}