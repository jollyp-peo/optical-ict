import LegalLayout from "./LegalLayout";

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains how Optimal ICT uses cookies and similar
        technologies to recognize you when you visit our website.
      </p>

      <h2 className="text-xl font-bold text-slate-950">What Are Cookies</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently and provide information to the owners of the site.
      </p>

      <h2 className="text-xl font-bold text-slate-950">How We Use Cookies</h2>
      <p>
        We use cookies for several purposes: to enable certain functions of the
        service, to provide analytics, to store your preferences, and to enable
        advertisement delivery, including behavioral advertising.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Types of Cookies We Use</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Essential cookies:</strong> Necessary for the website to
          function properly.
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us understand how visitors
          interact with our website.
        </li>
        <li>
          <strong>Preference cookies:</strong> Enable the website to remember
          information that changes the way it behaves or looks.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-slate-950">Managing Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings.
        You can set your browser to refuse all or some cookies, or to alert you
        when websites set or access cookies. If you disable or refuse cookies,
        please note that some parts of this website may become inaccessible or
        not function properly.
      </p>

      <h2 className="text-xl font-bold text-slate-950">Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at
        info@optimalict.com.ng.
      </p>
    </LegalLayout>
  );
}