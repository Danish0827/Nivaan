import { getHeader } from "@/lib/api";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = await getHeader()
    return (
        <>
            <Header menu={res.items} />
            {children}
            <NivaanFooter />
        </>
    );
}
