import Image from "next/image";
import DoctorInfoSection from "./DoctorInfoSection";
import RequestCallbackModal from "./RequestCallbackModal";

interface DoctorProfileProps {
  data: any;
}
export default function DoctorProfile({ data }: DoctorProfileProps) {
  const {
    title,
    featured_image,
    qualification,
    hospital,
    informations,
  } = data;

  return (
    <section className="bg-[#F5FBFF] mt-10 py-10 lg:py-20 relative ">
      <div className="px-4 pt-10 lg:px-10 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[450px_1fr] gap-8 lg:gap-12">
          <div className="relative">
            <div className="lg:sticky lg:top-24 text-center">
              <div className="px-6">
                {featured_image &&
                  <div className="relative mx-auto mb-6 w-full h-full">
                    <Image
                      src={featured_image?.url}
                      alt={title}
                      width={1000}
                      height={1000}
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>}
                <h2 className="text-2xl font-semibold text-[#0852A0]">
                  {title}
                </h2>
                <p className="mt-1 text-base font-medium text-[#06A1DC]">
                  {qualification}
                </p>
                <hr className="my-5 2xl:my-8" />
                <span className="text-black font-thin ">Available at:</span>
                <div className="mt-1 space-y-1 text-lg text-black underline">
                  <p>{hospital}</p>
                </div>
                <div className="flex justify-center relative mt-6">
                  <RequestCallbackModal buttonText={'BOOK APPOINTMENT'} id={data.cta_button_name} />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl lg:rounded-[50px] bg-[#EAF6FF] p-6 sm:p-8 lg:p-10">
            {informations?.map((item: any, index: number) => (
              <DoctorInfoSection
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
