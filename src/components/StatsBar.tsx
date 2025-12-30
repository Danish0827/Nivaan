"use client";

import { useEffect, useState, useRef } from "react";

interface StatItem {
  counter_numbers?: number | string;
  counter_operator?: string;
  counter_text?: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

interface CounterProps {
  end: number;
  suffix?: string;
}

// --------------------- StatsBar Component ---------------------
const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
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
      className="w-full hidden lg:flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-start gap-8 py-10 pb-20 bg-[#fff] lg:px-10 xl:px-14 2xl:px-20"
    >
      {stats?.map((item, index) => {
        const value = Number(
          String(item.counter_numbers || "0").replace(/,/g, "")
        );
        const suffix = item.counter_operator || "";
        const label = item.counter_text || "";

        return (
          <div key={index} className="relative lg:flex-1 text-center px-4">
            <h2 className="text-[38px] font-bold text-[#0056a9]">
              {animate ? <Counter end={value} suffix={suffix} /> : "0"}
            </h2>
            <p className="text-xs xl:text-xl uppercase font-semibold text-[#0090d0] tracking-wide">
              {label}
            </p>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute -right-5 top-[15%] h-28 w-[1px] bg-[#dce3ed]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

// --------------------- Counter Component ---------------------
export const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  // detect decimal places (4.8 → 1, 36 → 0)
  const decimalPlaces =
    end.toString().includes(".")
      ? end.toString().split(".")[1].length
      : 0;

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
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })}
      {suffix}
    </>
  );
};


export default StatsBar;
