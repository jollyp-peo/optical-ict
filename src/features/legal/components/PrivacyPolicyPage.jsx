import LegalLayout from "./LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        At Optimal ICT Productive Tech, we take your privacy seriously. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you visit our website or use our services.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide to us when you
        register on our website, book a repair or service, subscribe to our
        newsletter, or contact us. This may include your name, email address,
        phone number, and any details you provide about your device or project.
      </p>

      <h2 className="text-xl font-bold text-slate-950">How We Use Your Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our
        services, to communicate with you, to process your bookings, and to
        send you updates and promotional materials.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, alteration,
        disclosure, or destruction.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Third-Party Services</h2>
      <p>
        We may employ third-party companies and individuals to facilitate our
        services, provide services on our behalf, or assist us in analyzing how
        our services are used. These third parties have access to your personal
        information only to perform these tasks on our behalf.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal
        information. You may also object to the processing of your personal
        data, request that we restrict the processing of your personal data, or
        request portability of your personal data.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at info@optimalict.com.ng.
      </p>
    </LegalLayout>
  );
}