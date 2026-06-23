export default function SectionEyebrow({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex
        items-center

        rounded-full

        border
        border-yellow-200

        bg-yellow-50

        px-4
        py-2

        text-lg
        font-medium

        text-yellow-700

        ${className}
      `}
    >
      {children}
    </span>
  );
}