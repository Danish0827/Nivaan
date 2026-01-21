import { montserratBold, rubikBold, rubikLight, rubikReg } from "@/app/fonts";
import React from "react";

const HeaderSpine = () => {
  return (
    <>
    <div className="bg-[#2F438F] p-2 py-4  lg:block z-50 w-[100%] hidden md:block">
      <div className="flex text-white items-start w-[100%] mx-auto  ">
       

        <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center w-[20%] px-2 min-h-16 md:min-h-24 border-r-[1px] md:md:border-r-0">
          <p className={`${rubikBold.className} text-sm md:text-4xl`}>15+</p>
          <p className={`${rubikReg.className} text-[7px] md:text-2xl mt-1`}>Clinics  <br/> Across India</p>
        </div>

        <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center w-[20%] px-2 min-h-16 md:min-h-24 border-r-[1px] md:md:border-r-0">
          <p className={`${rubikBold.className} text-sm md:text-4xl`}>25K+</p>
          <p className={`${rubikReg.className} text-[7px] md:text-2xl mt-1`}>Happy Patients</p>
        </div>

        <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center items-center w-[20%] min-h-16 md:min-h-24 md:px-4 border-r-[1px] md:border-r-0 px-2">
          <p className={`${rubikBold.className}  text-sm md:text-4xl`}>9.3X</p>
          <p className={`${rubikReg.className} text-[7px] md:text-2xl w-[100%] mt-1`}>
            Effective than Other   <br /> Pain-Relief Treatments
          </p>
        </div>
        {/* <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center items-center w-[20%] min-h-16 md:min-h-24 md:border-r-[0px] px-2 order-4 md:order-3">
          <p className={`${rubikBold.className}  text-sm md:text-4xl`}>20+</p>
          <p className={`${rubikReg.className} text-[7px] md:text-2xl w-[100%] mt-1`}>
            Advanced Non-Surgical<br/> Procedures
          </p>
        </div> */}
        <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center items-center w-[20%] min-h-16 md:min-h-24 px-2 order-3 md:order-4 border-r-[1px] md:border-r-0">
          <p className={`${rubikBold.className}  text-sm md:text-4xl`}>100+</p>
          <p className={`${rubikReg.className} text-[7px] md:text-2xl w-[100%] mt-1`}>
            Years of Experienced<br/> Pain Specialists
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 flex md:hidden">
        {/* Card 1 */}

        <div className="bg-[#243E90] rounded-xl text-center p-6 text-white">
          <h3 className="text-2xl font-bold">15+</h3>
          <p className="text-sm md:text-base">Clinics Across India</p>
        </div>

        <div className="bg-[#243E90] rounded-xl text-center p-6 text-white">
          <h3 className="text-2xl font-bold">25K+</h3>
          <p className="text-sm md:text-base">Happy Patients</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#243E90] rounded-xl text-center p-6 text-white">
          <h3 className="text-2xl font-bold">9.3X</h3>
          <p className="text-sm md:text-base">
            Effective than Other Pain-Relief Treatments
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#243E90] rounded-xl text-center p-6 text-white">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-sm md:text-base">
            Years Experienced Pain Specialist
          </p>
        </div>

        {/* Card 4 */}
        {/* <div className="bg-[#243E90] rounded-xl text-center p-6 text-white">
          <h3 className="text-2xl font-bold">20+</h3>
          <p className="text-sm md:text-base">
            Advanced Non-Surgical Procedures
          </p>
        </div> */}
    </div>

    </>
  );
};

export default HeaderSpine;

