import Link from "next/link";

export default function FooterColumn({
  title,
  links,
}) {
  return (
    <div>
      <h3
        className="
          text-sm
          font-semibold

          uppercase
          tracking-wider

          text-white
        "
      >
        {title}
      </h3>

      <ul
        className="
          mt-6
          text-slate-400
          space-y-3
        "
      >
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                text-slate-200

                transition-colors

                hover:text-yellow-400
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}