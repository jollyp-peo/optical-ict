import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TrackingSearch from "@/features/tracking/components/TrackingSearch";

export const metadata = {
  title: "Track Your Booking — Optimal ICT",
  description:
    "Track the status of your repair or service booking with Optimal ICT.",
};

export default function TrackPage() {
  return (
    <Section containerClassName="pb-20">
      <SectionHeader
        centered
        eyebrow="Tracking"
        title="Track Your Booking"
        description="Enter your booking reference number to check the current status of your repair or service request."
      />

      <div className="mx-auto mt-16 max-w-2xl">
        <TrackingSearch />
      </div>
    </Section>
  );
}