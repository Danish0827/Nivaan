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
    <div className="py-6 bg-[#0852A0]">
    <div
      className="w-full overflow-hidden flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center gap-8  px-3 2xl:px-10 relative z-30"
    >
      {stats?.map((item, index) => (
          <div key={index} className="relative lg:flex-1 items-center text-left px-2">
            <div className="text-center gap-3 2xl:mt-3">
            
            <h2 className="text-base lg:text-lg 2xl:text-xl font-semibold text-white ">
              {item.title}
            </h2>
      
            {/* <p className="text-xs lg:text-sm 2xl:text-base font-mono font-normal text-white tracking-wide line-clamp-4">
              {item.info}
            </p> */}
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute -right-5 -top-3 h-20 w-px bg-[#dce3ed]" />
            )}
          </div>
      ))}
    </div>
    </div>
  );
};

export default HubStatsBar