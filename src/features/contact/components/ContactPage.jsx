import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ContactForm } from "@/features/contact";

import {
  Envelope,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  return (
    <>
      <Section
        containerClassName="
          pt-32
          pb-20
        "
      >
        <SectionHeader
          centered
          eyebrow="Contact"
          title="Get In Touch"
          description="Whether you have a question about our services, need a quote, or just want to say hello, we would love to hear from you."
        />

        <div
          className="
            mt-16

            grid
            gap-16

            lg:grid-cols-[1fr_1.2fr]
          "
        >
          {/* Contact Info */}

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Contact Information
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                    text-yellow-600
                  "
                >
                  <Envelope size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="mt-1 text-slate-600">info@optimalict.com.ng</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                    text-yellow-600
                  "
                >
                  <Phone size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Phone</p>
                  <p className="mt-1 text-slate-600">+234 807 615 7744</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                    text-yellow-600
                  "
                >
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Address</p>
                  <p className="mt-1 text-slate-600">
                    12 Sarka Tinubu Street, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                    text-yellow-600
                  "
                >
                  <Clock size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Working Hours</p>
                  <p className="mt-1 text-slate-600">
                    Monday - Saturday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              lg:p-10
            "
          >
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}