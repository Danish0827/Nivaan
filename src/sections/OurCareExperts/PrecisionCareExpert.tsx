// app/components/PrecisionCareExpert.tsx
import Image from "next/image";
import { FC,useState } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeader';
import { X } from "lucide-react";
import CustomButton from "@/components/CustomButton";

const PrecisionCareExpert: FC = () => {
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
          "Form Name": "Precision-Care-Expert",
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
              src={require("../../../public/talwar.png")}
              alt="Dr. Naveen Talwar"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-1">
          <h2 className="text-xl font-bold text-gray-900">
            Dr. Naveen Talwar
          </h2>
          <p className="text-gray-700 text-sm mt-1">
            MBBS, MS – Orthopaedics
            <br />
            Medical Director – Nivaan
          </p>

          <p className="inline-block mt-3 text-blue-700 font-semibold bg-blue-100 px-3 py-1 rounded-md">
            32+ Years of Experience
          </p>

          <hr className="my-4 border-gray-300" />

          {/* Short description */}
          {/* <p className="text-gray-700 text-sm">
            Dr. Naveen Talwar is a highly respected Orthopedic Surgeon with
            experience in advanced joint, spine, and sports injury management.
            He holds fellowships from New York and Switzerland and has
            successfully performed 2000+ surgical procedures. He is renowned
            for combining surgical precision with regenerative and functional
            medicine. Previously he was{" "}
            <strong>
              Vice Chairman, Dept. of Orthopaedics – Sir Ganga Ram Hospital
            </strong>
            . He has also been a Senior Consultant at Fortis Group of
            Hospitals and Aashlok Hospital.
            <br/>
            <button
              onClick={() => setOpen(!open)}
              className="mr-1 text-blue-700 hover:underline font-medium"
            >
              {open ? "Show Less" : "Know More"}
            </button>
          </p> */}

          <p className="text-gray-700 text-sm">
            Dr. Naveen Talwar is a highly respected Orthopedic Surgeon with
            experience in advanced joint, spine, and sports injury management.
            He holds fellowships from New York and Switzerland and has
            successfully performed <span>2000+ surgical procedures.</span>

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
              He is renowned for combining surgical precision with regenerative
              and functional medicine. Previously he was{" "}
              <strong>
                Vice Chairman, Dept. of Orthopaedics – Sir Ganga Ram Hospital
              </strong>
              . He has also been a Senior Consultant at Fortis Group of
              Hospitals and Aashlok Hospital.
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
                  <li>• MBBS - UCMS College New Delhi, 1985</li>
                  <li>• MS - Orthopaedics - King Georges Medical College, Lucknow University, 1990</li>
                </ul>
              </div>

              {/* Memberships */}
              <div>
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200">
                  Memberships
                </h3>
                <ul className="space-y-1 text-gray-700 leading-relaxed">
                  <li>• Indian Orthopaedic Association</li>
                  <li>• Arthroscopic Society Of India</li>
                  <li>• Indo-French Orthopaedic Association</li>
                  <li>• Delhi Arthroplasty Association</li>
                  <li>• AO/Asif Association, Switzerland</li>
                  <li>• Delhi Orthopaedic Association</li>
                </ul>
              </div>

              {/* Area of Expertise */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200 pb-1 mb-4">
                  Area of Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li><span className="font-bold">• Knee Resurfacing Procedure</span></li>
                    <li>• Joint Replacement Surgeries for Knee, Hip, Shoulder, Elbow and Ankle</li>
                    <li>• Spine Surgery</li>
                    <li>• Arthroscopy for Joint Issues</li>
                  </ul>
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li>• Sports Injury Management</li>
                    <li>• Deformity Correction and Limb Lengthening</li>
                    <li>• Cell Regeneration Therapies</li>
                    <li>• Functional Medicine</li>
                  </ul>
                </div>
              </div>
              {/* Past Experience */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-sky-600 border-b border-sky-200 pb-1 mb-4">
                  Past Experience
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li>• Sir Ganga Ram Hospital, New Delhi</li>
                  </ul>
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    <li>• Fortis Hospital, Delhi</li>
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

export default PrecisionCareExpert;
