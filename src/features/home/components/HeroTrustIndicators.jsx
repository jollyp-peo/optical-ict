export default function HeroTrustIndicators({
  items,
}) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      {items.map((item, index) => (
        <div
          key={item}
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            backdrop-blur-md
            shadow-xl

            ${
              index === 1
                ? `
                  bg-purple-100/80
                  text-purple-700
                `
                : `
                  bg-white/80
                  text-slate-800
                `
            }
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
}