'use client'
import { ConditionsTreatedType } from "@/app/api/allTypes";
import ConditionsTreatedBox from "./ConditionsTreatedBox";
import { montserratLightBold } from '@/app/fonts'
import { usePathname } from "next/navigation";
import path from "path";
interface ConditionsTreatedProps {
    heading: string;
    conditions: ConditionsTreatedType[];
    imgStyle?: string;
}

const ConditionsTreated: React.FC<ConditionsTreatedProps> = ({ heading, conditions }) => {
    const pathName = usePathname();
    const isKyphoplasty = pathName === "/next/Kyphoplasty-new"||pathName==="/next/mumbai/Kyphoplasty-new";
    const isPainMedication = pathName === "/next/pain-medication"|| pathName==="/next/jaipur/pain-medication"||pathName==="/next/lucknow/pain-medication"

    return (
      <section className={`${isPainMedication ? 'pt-0 bg-white' : 'pt-[1px] bg-[#EAF1FB]'} md:pt-[10px] pb-[42px] md:pb-[80px] px-11 md:px-[70px] text-black`}>
        <h2 className={`${montserratLightBold.className} ${ isPainMedication ? "mx-0" : "mx-auto"} w-full text-xl md:text-[2.625rem] text-[#2F438F] mt-8 md:my-12 mb-6 text-center`}>
          {heading}
        </h2>
        {
            isKyphoplasty ?
            <div className="flex flex-row justify-center gap-8">
                {conditions.map((condition) => (
                    <ConditionsTreatedBox key={condition.id} image={condition.image} content={condition.content} imgStyle={condition?.imgStyle} />
                ))}
            </div> : 
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {conditions.map((condition) => (
                    <ConditionsTreatedBox key={condition.id} image={condition.image} content={condition.content} imgStyle={condition?.imgStyle} />
                ))}
            </div>
        }
      </section>
    );
};
  
export default ConditionsTreated;



