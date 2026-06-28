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
          h-12
          w-12
          rounded-xl
          object-contain
        "
      />

      <div>
        <span
          className="
            block
            text-m
            font-semibold
          "
        >
          Optimal ICT
        </span>

        <span
          className="
            text-sm
            text-slate-900
          "
        >
          Productive Tech.
        </span>
        <br></br>
        <span
          className="
            text-sm
            text-orange-950
          "
        >
          RC 3658997. 
        </span>
      </div>
    </Link>
  );
}