import type { StaticImageData } from "next/image";
import { rubikSemiBold } from '@/app/fonts'
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Condition {
  image: StaticImageData;
  content: string;
  imgStyle?: string;
}
const ConditionsTreatedBox = ({image, content, imgStyle}: Condition) => {
  const path = usePathname()
  const isPainMedication = path === "/next/pain-medication"
  const defaultImgClassName = "size-7 md:size-12 mr-2 md:mr-4"

  return (
    <div className={`bg-white flex flex-row items-center ${isPainMedication ? 'p-3 md:p-6' : 'p-3'} border rounded-xl shadow-md`}>
      <Image width={500} height={500} src={image.src} alt="Outcome Image" className={`${imgStyle ? imgStyle : defaultImgClassName}`} unoptimized/>
      <div className="capitalize flex-1 flex items-center">
        <p className={`${rubikSemiBold.className} text-[#2F438F] text-[9px] leading-[11.34px] md:text-[23px] md:leading-[27px]`}>{content}</p>
      </div>
    </div>
  );
};

export default ConditionsTreatedBox