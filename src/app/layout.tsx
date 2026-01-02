import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";

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

async function getMenu() {
  const res = await fetch(
    "https://hclient.in/nivaan/wp-json/site/v1/menus/primary_menu",
    { cache: "force-cache" } // static fetch
  );
  const data = await res.json();
  return data.items || [];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenu();
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Header menu={menu} />
        {children}
        <NivaanFooter/>
      </body>
    </html>
  );
}
