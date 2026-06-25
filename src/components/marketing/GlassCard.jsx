export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/40

        bg-white/65

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-500

        ${
          hover
            ? `
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-2xl
            `
            : ""
        }

        ${className}
      `}
    >
      {/* Purple Ambient Glow */}

      <div
        className="
          absolute
          -left-16
          -top-16

          h-48
          w-48

          rounded-full

          bg-purple-400/10

          blur-3xl
        "
      />

      {/* Yellow Hover Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-yellow-300/0

          blur-3xl

          transition-all
          duration-500

          group-hover:bg-yellow-300/25
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}