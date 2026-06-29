import Link from "next/link";

import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

import { servicesPreview } from "@/data/home";

import ServicesShowcase from "./ServicesShowcase";
export default function ServicesContent() {
  return (
    <div >
      <SectionEyebrow>Technology Services</SectionEyebrow>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          tracking-tight
          text-slate-950
          lg:text-5xl
        "
      >
        Everything You Need To Keep Technology Working.
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-600
        "
      >
        From repairs and support to software, networking, websites and mobile
        apps.
      </p>

      <div
        className="
          mt-10
          grid
          gap-4
        "
      >
        <ServicesShowcase services={servicesPreview} />
      </div>

      {/* <div className="mt-8">
        <Link href="/services">
          <Button size="lg">Explore Services</Button>
        </Link>
      </div> */}
    </div>
  );
}
