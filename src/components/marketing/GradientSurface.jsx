export default function GradientSurface({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-purple-100
        via-purple-50
        to-sky-50

        ${className}
      `}
    >
      <div
        className="
          absolute
          -left-32
          top-0

          h-96
          w-96

          rounded-full

          bg-purple-400/20

          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-24
          bottom-0

          h-96
          w-96

          rounded-full

          bg-sky-300/20

          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}