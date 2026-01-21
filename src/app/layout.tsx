import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { VWOScript } from 'vwo-smartcode-nextjs';
import Template from "./template";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
  description: "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <VWOScript accountId="1147532" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <GoogleTagManager gtmId="GTM-MZ7ZLG9" />
      </head>
      <body
        className={`${rubik.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Template>{children}</Template>
      </body>
    </html>
  );
}
