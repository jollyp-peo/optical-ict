import "./globals.css";

import Providers from "@/providers/Providers";

import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,

  icons: {
    icon: [
      { url: "/favicon/optimal.ico", sizes: "any" },
      { url: "/favicon/optimal.webp", type: "image/webp" },
    ],
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
