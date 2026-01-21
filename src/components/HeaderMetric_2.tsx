import { montserratBold, rubikLight } from "@/app/fonts";
import React from "react";

const HeaderMetric_2 = ({ pathName }: { pathName?: string }) => {
  const newPage = pathName === "plantar-fasciitis" || pathName === "fibromyalgia-treatment" || pathName === "gout-pain" || pathName === "neuropathic-pain"

  return (
    <div className="bg-[#2F438F] p-2 py-4 hidden lg:block z-50 ">
          <div className="flex text-white items-start max-w-7xl mx-auto">
            <div className="flex flex-col flex-1 text-center">
              <p className={`${montserratBold.className} text-4xl`}>25K+</p>
              <p className={`${rubikLight.className} text-xl mt-2`}>Happy Patients</p>
            </div>
            <div className="flex flex-col flex-1  text-center items-center">
              <p className={`${montserratBold.className} text-4xl`}>9.3X</p>
              <p className={`${rubikLight.className} text-xl w-60 mt-2`}>
                Effective than Other Pain-Relief Treatments
              </p>
            </div>
            <div className="flex flex-col flex-1  text-center items-center">
              <p className={`${montserratBold.className} text-4xl`}>20+</p>
              <p className={`${rubikLight.className} text-xl w-56 mt-2`}>
                Advanced Non-Surgical Procedures
              </p>
            </div>
            <div className="flex flex-col flex-1  text-center items-center">
              <p className={`${montserratBold.className} text-4xl`}>30+</p>
              <p className={`${rubikLight.className} text-xl  w-56 mt-2`}>
                Years of Experienced Pain Specialists
              </p>
            </div>
          </div>
    </div>
  );
};

export default HeaderMetric_2;
