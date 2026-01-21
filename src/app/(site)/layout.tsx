import { getFooter, getHeader } from "@/lib/api";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingButtonSite from "@/components/FloatingButtonSite";
import "@/app/style/site.css"

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = await getHeader()
    const res1 = await getFooter()
    return (
        <>
            <Header menu={res.items} />
            {children}
            <ScrollToTopButton/>
            <FloatingButtonSite/>
            <NivaanFooter menu={res1.items} />
        </>
    );
}
