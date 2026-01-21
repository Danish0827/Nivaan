import Image from "next/image";
import { montserratBold, rubikLight, rubikReg, rubikSemiBold } from "@/app/fonts";
import { IconGridData } from "@/app/api/allTypes";

type PropTypes = {
    title: string;
    gridData: IconGridData[];
    columns?: number;
}

const IconCardGrid = ({ title, gridData }: PropTypes) => {
    return (
        <section className="max-w-7xl mx-auto text-center my-6 lg:my-12 px-8">
        <h2 className={`${montserratBold.className} text-[#2F438F] lg:text-[42px] text-lg lg:leading-10`}>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-2 lg:my-12 lg:gap-8">
          {gridData.map((item) => (
            <div className="flex justify-center" key={item.id}>
                <div
                key={item.id}
                className="bg-white w-[206px] h-[69.19px] lg:w-[346.54px] lg:h-[116.34px] flex items-center gap-2 justify-start lg:gap-4 rounded-[9.82px] shadow p-2 lg:p-4"
                style={{ border: '0.94px solid rgba(224, 224, 221, 1)' }}
                >
                <div className="flex-shrink-0 px-4">
                    <Image
                    src={item.icon}
                    alt={item.description}
                    width={30.55}
                    height={32}
                    className="lg:hidden"
                    unoptimized
                    />
                    <Image
                    src={item.icon}
                    alt={item.description}
                    width={60}
                    height={80}
                    className="hidden lg:block"
                    unoptimized
                    />
                </div>
                <p className={`${rubikSemiBold.className} text-[#2F438F] text-left text-sm lg:text-2xl font-bold`}>
                    {item.description}
                </p>
                </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default IconCardGrid;