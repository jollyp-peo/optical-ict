import Link from "next/link";
import { publicNavigation } from "@/constants";

export default function NavLinks() {
  return (
    <nav
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {publicNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            text-sm
            font-medium
            text-slate-700
            transition-colors
            hover:text-slate-950
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}