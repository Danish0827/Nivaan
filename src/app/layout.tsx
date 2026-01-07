import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";
import { getHeader } from "@/lib/api";

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

// async function getMenu() {
  

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await getHeader()
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Header menu={res.items} />
        {children}
        <NivaanFooter/>
      </body>
    </html>
  );
}
