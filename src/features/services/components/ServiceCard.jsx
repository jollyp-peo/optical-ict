import Link from "next/link";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ServiceCard({
  service,
}) {
  return (
    <Card
      className="
        group

        flex
        flex-col

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h3
        className="
          text-2xl
          font-bold
          theme-text
        "
      >
        {service.title}
      </h3>

      <p
        className="
          mt-4

          leading-7

          theme-text-secondary
        "
      >
        {service.shortDescription}
      </p>

      <div
        className="
          mt-6

          flex
          flex-wrap
          gap-2
        "
      >
        {service.benefits
          .slice(0, 3)
          .map((benefit) => (
            <span
              key={benefit}
              className="
                rounded-full

                bg-purple-50

                px-3
                py-1

                text-sm

                text-purple-700
              "
            >
              {benefit}
            </span>
          ))}
      </div>

      <div className="mt-8">
        <Link
          href={`/services/${service.slug}`}
        >
          <Button fullWidth>
            Learn More
          </Button>
        </Link>
      </div>
    </Card>
  );
}