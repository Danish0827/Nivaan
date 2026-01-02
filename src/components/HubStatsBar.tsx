"use client";
interface StatItem {
  title?: string;
  info?: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const HubStatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  
  return (
    <div
      className="w-full  flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-start gap-8 py-5 bg-[#0852A0] px-3 2xl:px-10 relative z-30"
    >
      {stats?.map((item, index) => (
          <div key={index} className="relative lg:flex-1 items-center text-left px-2">
            <div className="text-center gap-3 2xl:mt-3">
            
            <h2 className="text-base lg:text-lg 2xl:text-xl font-semibold text-[#C6E8F6] pb-2 lg:pb-3">
              {item.title}
            </h2>
      
            <p className="text-xs lg:text-sm 2xl:text-base font-mono font-thin text-white/60 tracking-wide line-clamp-4">
              {item.info}
            </p>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute -right-5 top-[15%] h-24 w-px bg-[#dce3ed]" />
            )}
          </div>
      ))}
    </div>
  );
};

export default HubStatsBar