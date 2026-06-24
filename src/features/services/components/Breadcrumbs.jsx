import Link from "next/link";

export default function Breadcrumbs({
  items,
}) {
  return (
    <div
      className="
        mb-8

        flex
        flex-wrap
        items-center
        gap-2

        text-sm
      "
    >
      {items.map(
        (item, index) => (
          <div
            key={item.label}
            className="
              flex
              items-center
              gap-2
            "
          >
            {item.href ? (
              <Link
                href={item.href}
                className="
                  text-slate-500

                  hover:text-purple-700
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="
                  font-medium
                "
              >
                {item.label}
              </span>
            )}

            {index <
              items.length -
                1 && (
              <span>
                /
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
}