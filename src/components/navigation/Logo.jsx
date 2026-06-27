import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        gap-2
      "
    >
      <img
        src="/images/brand/optimal.logo.webp"
        alt="Optimal ICT"
        className="
          h-10
          w-10
          rounded-xl
          object-contain
        "
      />

      <div>
        <span
          className="
            block
            text-sm
            font-semibold
          "
        >
          Optimal ICT
        </span>

        <span
          className="
            text-xs
            text-slate-500
          "
        >
          Productive Technology
        </span>
      </div>
    </Link>
  );
}