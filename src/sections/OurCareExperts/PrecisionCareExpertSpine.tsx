// app/components/PrecisionCareExpert.tsx
import Image from "next/image";
import { FC,useState } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeader';
import { X } from "lucide-react";
import CustomButton from "@/components/CustomButton";

const PrecisionCareExpertSpine: FC = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";
   const landingPageUrl = `${origin}${pathName}`;
    const [modal, setModal] = useState(false);
    const handleClick = () => {
      sendGTMEvent({
        event: "Form Open",
        value: {
          "Form Name": "Precision-Care-Expert-spine",
          "CTA Button text": "Book Consultation",
          "Landing Page URL": landingPageUrl,
        },
      });
      setModal(!modal);
    };
    const handleCloseModal = () => {
        setModal(!modal);
        sendGTMEvent({
          event: "Form Close",
          value: {
            "Form Name": "Precision-Care-Expert",
            "CTA Button text": null,
            "Landing Page URL": landingPageUrl,
          },
        });
      };

  return (
    <section className="py-6 bg-blue-50">
    <div className="max-w-5xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
        Our Precision Care Expert
      </h2>

      {/* Card */}
      <div className="bg-white border border-blue-300 rounded-2xl p-6 md:flex md:items-start shadow-lg">
        {/* Left - Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="rounded-lg overflow-hidden w-48 h-60 relative shadow">
            <Image
              src={require("../../../public/sv.png")}
              alt="Dr. Sidharth Verma"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-1">
          <h2 className="text-xl font-bold text-gray-900">
            Dr. Sidharth Verma
          </h2>
          <p className="text-gray-700 text-sm mt-1">
            MD, DNB, PDCC (Pain Management), FIPP (WIP, USA), FIAPM, EDPM (Spain), Fellowship in Spinal Cord Stimulation (South
            Korea), Fellowship in Spine Endoscopy (South Korea)
            <br />
            Regional Clinical Lead - Nivaan
          </p>

          <p className="inline-block mt-3 text-blue-700 font-semibold bg-blue-100 px-3 py-1 rounded-md">
            17+ Years of Experience
          </p>

          <hr className="my-4 border-gray-300" />

          <p className="text-gray-700 text-sm">
          Dr. Sidharth Verma is an internationally recognized interventional spine & pain physician with deep clinical, academic, and institutional credibility. 

            {/* Mobile button (shows only below md) */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-block ml-1 text-blue-700 hover:underline font-medium md:hidden"
            >
              {open ? "Show Less" : "Know More"}
            </button>

            {/* Rest of text (hidden on mobile if collapsed) */}
            <span className="hidden md:inline">
              {" "}
              He currently leads pain departments at D. Y. Patil Hospital - Navi Mumbai, Apollo Hospitals - Navi Mumbai while also consulting at leading multi-specialty institutions in Mumbai like Apollo Hospitals, Wockhard Hospital, Terna Hospital and Lilavati Hospital.
            </span>

            {/* Desktop button (at end, only visible ≥ md) */}
            <button
              onClick={() => setOpen(!open)}
              className="ml-1 text-blue-700 hover:underline font-medium hidden md:inline"
            >
              {open ? "Show Less" : "Know More"}
            </button>
          </p>

          {/* Expanded Content */}
          {open && (
            <div className="mt-6 text-gray-700 text-sm">
             
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2">
        
             {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200 ">
                  Education
                </h3>
                <ul className="space-y-1 text-gray-700 leading-relaxed">
                  <li>• MBBS, Acharya Shri Chander College of Medical Sciences, Jammu</li>
                  <li>• MD (Anaesthesiology), ASCOMS, Jammu</li>
                  <li>• DNB (Anaesthesiology), National Board of Examinations, New Delhi</li>
                  <li>• PDCC (Pain Medicine), Institute of Medical Sciences, BHU – One of India’s only formal pain 
                  subspecialty programs at time of his completion</li>
                </ul>
              </div>

              {/* Memberships */}
              <div>
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200">
                  Memberships
                </h3>
                <ul className="space-y-1 text-gray-700 leading-relaxed">
                  <li>• President – Indian Society of Anaesthesiologists, Navi Mumbai</li>
                  <li>• Joint Secretary – Indian Society of Pain Clinicians</li>
                  <li>• Governing Council Member - Indian Society for Study of Pain</li>
                  <li>• Member – IASP (International Association for the Study of Pain), ISSP (Indian Society for Study of Pain), RSACP (Research Society of Anesthesiology & Clinical Pharmacology), TNS (The Neuromodulation Society)</li>
                  <li>• Faculty – Mumbai Pain School & multiple international Workshops and CMEs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200">
                International Fellowship
                </h3>
                <ul className="space-y-1 text-gray-700 leading-relaxed">
                  <li>• FIPP – Fellow of Interventional Pain Practice (USA)</li>
                  <li>• FIAPM – Fellow of Indian Academy of Pain Medicine</li>
                  <li>• EDPM – European Diploma in Pain Medicine(Spain)</li>
                  <li>• Fellowship in Spinal Cord Stimulation (SouthKorea)</li>
                  <li>• Fellowship in Spine Endoscopy (South Korea)</li>
                </ul>
              </div>


              <div>
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200">
                  Area of Expertise
                </h3>
                <ul className="space-y-1 text-gray-700 leading-relaxed">
                  <li>• Interventional Spine & Pain Physician</li>
                  <li>• Minimally Invasive Pain & Spine Interventions (MIPSI)</li>
                  <li>• Chronic Pain Medicine and Pain Management</li>
                  <li>• Spine Endoscopy & Spinal Cord Stimulation</li>
                  <li>• Regenerative and Biologic Therapies for Pain</li>
                  <li>• Cancer Pain Management</li>
                  <li>• Neuromodulation Techniques</li>
                </ul>
              </div>

              {/* Past Experience */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200 pb-1 mb-4">
                  Past Experience
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li>• Professor & Mentor for Fellowship in Pain Medicine at DY Patil University School of Medicine, Navi Mumbai</li>
                  </ul>
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li>• Consultant – Apollo Hospitals, Wockhard Hospital, Lilavati Hospital</li>
                  </ul>
                </div>
              </div>
            </div>

            </div>
          )}
        </div>
      </div>

      {/* Book Consultation Button */}
      <div className="mt-6 text-center">
        {/* <button className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition">
          Book Consultation
        </button> */}
        <CustomButton
          className={`mx-auto ${"bg-[#DB5115]"}`}
          title="Book Consultation"
          onBtnClick={handleClick}
        />
      </div>

      {modal && (
        <div
          //className="fixed top-0 h-full w-full flex justify-center items-center z-[99]"
          className="fixed inset-0 flex justify-center items-center z-[99]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
              <Form
              formLocation={
                pathName === "/v1/herniated-new"
                  ? "Herniated-Why-Choose_Nivaan"
                  : pathName === "/next/chronic-pain-arthroplasty"
                  ? "Arthroplasty-Why-Choose-Nivaan"
                  : pathName === "/next/migraine"
                  ? "Migraine-Why-Choose-Nivaan"
                  : pathName === "/next/shoulder-pain"
                  ? "Shoulder-Pain-Why-Choose-Nivaan"
                  : pathName === "/next/knee-pain-resurface" 
                  ? 'knee-pain-resurface'
                  : pathName
              }
              formName="Why-Nivaan-Form"
            />
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  </section>
  );
};

export default PrecisionCareExpertSpine;
