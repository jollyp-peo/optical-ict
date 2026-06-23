export default function ProcessCard({
  step,
}) {
  return (
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-[28px]

        border
        border-white/30

        bg-white/50

        p-6

        backdrop-blur-md

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-[1.03]

        hover:shadow-2xl
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -top-12
            -right-12

            h-40
            w-40

            rounded-full

            bg-yellow-300/40

            blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        <div
          className="
            flex

            h-20
            w-20

            items-center
            justify-center

            rounded-3xl

            bg-gradient-to-br
            from-purple-100
            to-sky-100

            text-2xl
            font-bold

            text-slate-950

            shadow-lg
          "
        >
          {step.number}
        </div>

        <h3
          className="
            mt-6

            text-xl
            font-bold

            text-slate-950

            drop-shadow-sm
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-4

            leading-7

            text-slate-600
          "
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}