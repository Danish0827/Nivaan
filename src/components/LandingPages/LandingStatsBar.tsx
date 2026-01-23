"use client";
import { useEffect, useState, useRef } from "react";

interface StatItem {
  number?: number | string;
  special_character?: string;
  title?: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

interface CounterProps {
  end: number;
  suffix?: string;
}

const LandingStatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full lg:h-36 flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-start gap-8 pt-5 pb-12 bg-[#0852A0] px-3 xl:px-10 2xl:px-20 relative z-30"
    >
      {stats?.map((item, index) => {
        const value = Number(
          String(item.number || "0").replace(/,/g, "")
        );

        const suffix = item.special_character || "";
        const label = item.title || "";

        return (
          <div key={index} className="relative lg:flex-1 items-center text-left px-4">
            <div className="text-center lg:text-left lg:flex items-center justify-center gap-3 mt-5">
              {item.number &&
            <h2 className="text-3xl lg:text-2xl xl:text-3xl 2xl:text-[38px] font-bold text-white pb-2 lg:pb-0">
              {animate ? <Counter end={value} suffix={suffix} /> : "0"}
            </h2>
      }
            <p className="text-base lg:text-sm xl:text-base 2xl:text-xl uppercase font-semibold text-white tracking-wide">
              {label}
            </p>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute -right-5 top-[15%] h-20 w-[1px] bg-[#dce3ed]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const stepTime = 15;
    const step = (end / duration) * stepTime;
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <>
      {Math.floor(count).toLocaleString()}
      {suffix}
    </>
  );
};


export default LandingStatsBar