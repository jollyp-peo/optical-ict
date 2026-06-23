export default function FeatureSplit({
  content,
  media,
  reverse = false,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[40px]

        bg-gradient-to-br
        from-white
        via-purple-50/40
        to-sky-50/30

        shadow-sm

        ${className}
      `}
    >
      <div
        className={`
          grid
          
          lg:grid-cols-2
          lg:items-stretch

          ${
            reverse
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >
        {/* Content Side */}
        <div
          className="
            relative
            flex
            items-center
            overflow-hidden

            p-8
            lg:p-16
          "
        >
          {/* Purple Glow */}
          <div
            className="
              absolute
              -left-24
              -top-24

              h-72
              w-72

              rounded-full
              bg-purple-300/25

              blur-3xl
            "
          />

          {/* Sky Blue Glow */}
          <div
            className="
              absolute
              bottom-0
              right-0

              h-72
              w-72

              rounded-full
              bg-sky-300/20

              blur-3xl
            "
          />

          {/* Bridge Into Image */}
          <div
            className="
              absolute
              right-0
              top-0

              h-full
              w-48

              bg-gradient-to-r
              from-transparent
              via-purple-100/40
              to-sky-100/60

              blur-xl
            "
          />

          <div className="relative z-10">
            {content}
          </div>
        </div>

        {/* Media Side */}
        <div
          className="
            relative
            min-h-[500px]
            lg:min-h-full
            -ml-12
            lg:-ml-24
          "
        >
          {media}
        </div>
      </div>
    </div>
  );
}