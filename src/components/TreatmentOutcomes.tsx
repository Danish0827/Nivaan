import { outcomeBox } from "@/app/api/data";
import TreatmentOutcomesBox from "./TreatmentOutcomesbox";
import { montserratLightBold } from "@/app/fonts";

const TreatmentOutcome = () => {
  return (
    <section className="bg-[#EAF1FB] py-[42px] px-11 md:px-[70px] text-black">
      <h2
        className={`${montserratLightBold.className} w-3/4 mx-auto md:w-full text-lg md:text-[2.625rem] text-[#2F438F] mt-8 md:my-12 mb-6 text-center`}
      >
        Outcomes of the Treatment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomeBox.map((outcome) => (
          <TreatmentOutcomesBox key={outcome.id} outcome={outcome} />
        ))}
      </div>
    </section>
  );
};

export default TreatmentOutcome;
