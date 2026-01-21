import type { ImageLoaderProps, StaticImageData } from "next/image";
import Image from "next/image";

interface Outcome {
  id: number;
  image: StaticImageData;
  content: string;
}
const TreatmentOutcomesBox: React.FC<{ outcome: Outcome }> = ({ outcome }) => {
  return (
    // <div className="bg-white flex p-3 border rounded-xl shadow-md">
    // <Image src={outcome.image.src} alt="Outcome Image" width={36} height={53} className="w-14 h-14 object-cover rounded-lg mr-4" />
    // <div className="flex-1 flex items-center">
    //     <p className="text-gray-800">{outcome.content}</p>
    //   </div>
    // </div>
    <div className="bg-white flex p-3 border rounded-xl shadow-md">
      <div className=" w-19 h-16 flex items-center justify-center">
        <Image
          src={outcome.image.src}
          alt="Outcome Image"
          height={50}
          width={50}
          className="object-cover rounded-lg mr-4"
          unoptimized
        />
      </div>
      <div className="flex-1 flex items-center">
        <p className="text-gray-800">{outcome.content}</p>
      </div>
    </div>
  );
};

export default TreatmentOutcomesBox;
