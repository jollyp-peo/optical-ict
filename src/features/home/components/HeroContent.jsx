import Link from "next/link";

import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

import { heroContent } from "@/data/home";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <SectionHeader
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        description={heroContent.description}
      />

      <div
        className="
          mt-10
          flex
          flex-wrap
          gap-4
        "
      >
        <Link href={heroContent.primaryCta.href}>
          <Button size="lg">
            {heroContent.primaryCta.label}
          </Button>
        </Link>

        <Link href={heroContent.secondaryCta.href}>
          <Button
            variant="outline"
            size="lg"
          >
            {heroContent.secondaryCta.label}
          </Button>
        </Link>
      </div>
    </div>
  );
}