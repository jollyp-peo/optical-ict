import LegalLayout from "./LegalLayout";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        These Terms of Service govern your use of the Optimal ICT Productive Tech website and
        services. By accessing or using our services, you agree to be bound by
        these terms.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Use of Services</h2>
      <p>
        You agree to use our services only for lawful purposes and in a way
        that does not infringe the rights of, restrict, or inhibit anyone
        else&apos;s use and enjoyment of the services.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Bookings and Payments</h2>
      <p>
        When you book a repair or service through our platform, you agree to
        provide accurate and complete information. All bookings are subject to
        availability and confirmation. Payment terms will be communicated at the
        time of service.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and
        images, is the property of Optimal ICT and is protected by copyright
        and other intellectual property laws.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Limitation of Liability</h2>
      <p>
        Optimal ICT shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages resulting from your use of or
        inability to use our services.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Termination</h2>
      <p>
        We may terminate or suspend your access to our services immediately,
        without prior notice or liability, for any reason whatsoever, including
        without limitation if you breach these Terms.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. It is
        your responsibility to review these Terms periodically for changes.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at
        info@optimalict.com.ng.
      </p>
    </LegalLayout>
  );
}