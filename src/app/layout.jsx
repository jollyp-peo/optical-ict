import "./globals.css";

import Providers from "@/providers/Providers";

import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.seo.defaultTitle,
  description:
    siteConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}