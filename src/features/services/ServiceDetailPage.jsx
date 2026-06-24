import ServiceHeroSection from "./sections/ServiceHeroSection";
import ServiceBenefitsSection from "./sections/ServiceBenefitsSection";
import ServiceProcessSection from "./sections/ServiceProcessSection";
import ServiceCTASection from "./sections/ServiceCTASection";

export default function ServiceDetailPage({
  service,
}) {
  return (
    <>
      <ServiceHeroSection
        service={service}
      />

      <ServiceBenefitsSection
        service={service}
      />

      <ServiceProcessSection
        service={service}
      />

      <ServiceCTASection
        service={service}
      />
    </>
  );
}