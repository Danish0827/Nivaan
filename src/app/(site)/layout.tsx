import { getFooter, getHeader } from "@/lib/api";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";

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
            <NivaanFooter menu={res1.items} />
        </>
    );
}
