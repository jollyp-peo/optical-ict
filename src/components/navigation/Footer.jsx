"use client"
import Link from "next/link";

import {
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

import {
  footerData,
} from "@/data/footer";
import FooterColumn from "../layout/FooterColumn";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-slate-950
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0

          h-96
          w-96

          -translate-x-1/2

          rounded-full

          bg-purple-500/10

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
          py-20
        "
      >
        <div
          className="
            grid
            gap-16

            lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]
          "
        >
          {/* Company */}

          <div>
            <h2
              className="
                text-2xl
                font-bold

                text-white
              "
            >
              Optimal ICT
            </h2>

            <p
              className="
                mt-6

                max-w-sm

                leading-8

                text-slate-400
              "
            >
              Professional device repair,
              software development and
              enterprise technology
              solutions for businesses
              and individuals.
            </p>

            <div
              className="
                mt-8

                flex
                gap-4
              "
            >
              <Link href="#">
                <FacebookLogo
                  size={24}
                  className="text-slate-400 hover:text-yellow-400"
                />
              </Link>

              <Link href="#">
                <LinkedinLogo
                  size={24}
                  className="text-slate-400 hover:text-yellow-400"
                />
              </Link>

              <Link href="#">
                <XLogo
                  size={24}
                  className="text-slate-400 hover:text-yellow-400"
                />
              </Link>

              <Link href="#">
                <InstagramLogo
                  size={24}
                  className="text-slate-400 hover:text-yellow-400"
                />
              </Link>
            </div>
          </div>

          <FooterColumn
            title="Services"
            links={footerData.services}
          />

          <FooterColumn
            title="Company"
            links={footerData.company}
          />

          <FooterColumn
            title="Resources"
            links={footerData.resources}
          />

          {/* Contact */}

          <div>
            <h3
              className="
                text-sm
                font-semibold

                uppercase
                tracking-wider

                text-white
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-6

                space-y-4

                text-slate-400
              "
            >
              <p>
                info@optimalict.com.ng
              </p>

              <p>
                +234 807 615 7744
              </p>

              <p>
                Monday - Saturday
                <br />
                8:00 AM - 6:00 PM
              </p>

              <p>
                12 Saka Tinubu Street, Victoria Island, Lagos
                <br />
                Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div
          className="
            mt-16

            flex
            flex-col
            gap-4

            border-t
            border-white/10

            pt-8

            text-sm

            text-slate-500

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()}
            {" "}
            Optimal ICT.
            All rights reserved.
          </p>

          <div
            className="
              flex
              gap-6
            "
          >
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service">
              Terms
            </Link>

            <Link href="/cookie-policy">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}