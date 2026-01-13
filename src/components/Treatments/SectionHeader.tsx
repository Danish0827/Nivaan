import parse from "html-react-parser";
export function SectionHeader({
    subtitle,
    title,
    midtitle
}: {
    subtitle?: string;
    title?: string;
    midtitle?:string
}) {
    return (
        <>
            {subtitle && (
                <span className="text-base font-sans font-normal bg-[#06A1DC33] text-[#0852A0] px-3 py-1 rounded-full">
                    {subtitle}
                </span>
            )}
            {title && (
                <h2 className="text-xl font-sans lg:text-2xl xl:text-4xl text-[#0852A0] font-bold mt-5 mb-2">
                    {title}
                </h2>
            )}
            {midtitle && (
                <div className="text-lg lg:text-[22px] font-mono text-[#284599] font-medium mt-2 mb-4">
                    {parse(midtitle)}
                </div>
            )}
        </>
    );
}
