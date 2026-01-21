"use client";
import { rubikLight, rubikReg, rubikSemiBold } from "@/app/fonts";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { usePathname } from "next/navigation";

const FaqCard = ({ data, isOpen, onToggle }: any) => {
  const pathName = usePathname();
  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new";
  return (
    <div className=" flex justify-center">
      <div
        className={`bg-white border-[1px] rounded-xl p-4 my-2 hover:cursor-pointer w-[100%] relative px-2 md:px-5`}
        onClick={onToggle}
      >
        <div className="flex h-full">
          <div className="flex flex-col items-center relative top-0 md:top-2 h-full">
            <div className="min-h-3 w-3 rounded-full border-[1px] border-[#2E448F] flex items-center justify-center ">
              <div className="h-[6px] w-[6px] bg-[#2E448F] rounded-full"></div>
            </div>
            {isOpen && (
              <div className="border-dotted border-l-[2px] h-full lg:h-full w-1 mt-1 relative left-[1px]"></div>
            )}
          </div>

          <div
            className={`w-full ml-3 md:ml-6 ${isDrVideo ? "text-[#00B4E5]" : "text-[#2E448F]"
              }`}
          >
            <h1 className="w-60 lg:w-full text-sm md:text-xl font-bold">
              {data.title}
            </h1>

            {isOpen && (
              <div className="md:pr-8">
                {data.desc ===
                  "Nivaan’s AVN treatment is covered under cashless and reimbursement schemes for all major Private/ Government and State Health Insurance Schemes.For this treatment cost please fill the form on this page." ? (
                  <p className={`${rubikLight.className} mt-2 text-[10px] leading-[11.85px] md:text-xl`}>
                    Nivaan’s AVN treatment is covered under cashless and
                    reimbursement schemes for all major Private/ Government and
                    State Health Insurance Schemes.
                    <br /> <br />
                    <span className="">
                      For this treatment cost please fill the form on this page.
                    </span>
                  </p>
                ) : (
                  <p
                    className={`mt-2 text-[10px] leading-[11.85px] md:text-base whitespace-pre-line ${isDrVideo ? "text-black" : "text-[#2E448F]"
                      } ${rubikLight.className}`}
                  >
                    {data.desc}
                  </p>
                )}
              </div>
            )}
          </div>

          <div
            className={`relative -top-0.5 md:top-1.5 ${isDrVideo ? "text-[#00B4E5]" : "text-[#2E448F]"
              }`}
          >
            {isOpen ? <MinusCircledIcon /> : <PlusCircledIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
