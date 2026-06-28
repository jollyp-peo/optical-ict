"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className, ...props }) {
  const pathname = usePathname();
  const isHashLink = href.startsWith("/#");
  const isSamePage = href.startsWith("#");

  // If it's a hash link on the home page, use <a> for native smooth scroll
  if ((isHashLink || isSamePage) && pathname === "/") {
    const hash = isHashLink ? href.replace("/", "") : href;
    return (
      <a href={hash} className={className} {...props}>
        {children}
      </a>
    );
  }

  // Everything else (regular routes, hash links from other pages) use <Link>
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}