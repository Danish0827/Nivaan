import { montserratBold, rubikLight } from "@/app/fonts";
import React from "react";

const HeadMetricMob = ({pathName}: {pathName?: string}) => {
  const newPage = pathName==="plantar-fasciitis" || pathName=== "fibromyalgia-treatment"|| pathName==="gout-pain" || pathName==="neuropathic-pain"
  const metricData = pathName === "avn-treatment" ? avnMetricData : newPage ? metricData2 : metricData1;
  return (
    <div className="grid grid-cols-2 gap-4 lg:hidden pb-8">
      {metricData.map((data, i) => {
        return (
          <div
            key={i}
            className="bg-[#2F438F] rounded-lg text-white p-2 text-center flex flex-col items-center py-4"
          >
            <p className={`${montserratBold.className} text-[20px] md:text-[40px]`}>{data.title}</p>
            <p className={`${rubikLight.className} text-xs w-32 `}>
              {data.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeadMetricMob;
const metricData1 = [
  {
    title: "20K+",
    desc: "Happy Patients",
  },
  {
    title: "9.3X+",
    desc: "Effective than Other Pain-Relief Treatments",
  },
  {
    title: "30+",
    desc: "Years Experienced Pain Specialist",
  },
  {
    title: "20+",
    desc: "Advanced Non-Surgical Procedures",
  },
];

const metricData2 = [
  {
    title: "25K+",
    desc: "Happy Patients",
  },
  {
    title: "9.3X",
    desc: "Effective than Other Pain-Relief Treatments",
  },
  {
    title: "30+",
    desc: "Years Experienced Pain Specialist",
  },
  {
    title: "20+",
    desc: "Advanced Non-Surgical Procedures",
  },
];

const avnMetricData = [
  {
    title: "10K+",
    desc: "Happy Patients",
  },
  {
    title: "50+",
    desc: "Years of Experienced Pain Specialists",
  }
]
