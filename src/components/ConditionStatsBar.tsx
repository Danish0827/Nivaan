"use client";
interface StatItem {
  title?: string;
  info?: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}


const ConditionStatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  
  return (
    <div
      className="w-full lg:h-36 flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-start gap-8 pt-5 pb-12 bg-[#0852A0] px-3 xl:px-10 2xl:px-20 relative z-30"
    >
      {stats?.map((item, index) => (
          <div key={index} className="relative lg:flex-1 items-center text-left px-4">
            <div className="text-center gap-3 2xl:mt-3">
            
            <h2 className="text-base lg:text-lg 2xl:text-xl font-semibold text-white pb-2 lg:pb-3">
              {item.title}
            </h2>
      
            <p className="text-xs lg:text-sm 2xl:text-base font-mono font-normal text-white tracking-wide">
              {item.info}
            </p>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute -right-5 top-[15%] h-20 w-px bg-[#dce3ed]" />
            )}
          </div>
      ))}
    </div>
  );
};

export default ConditionStatsBar