"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const RequestCallbackModal = ({ buttonText, id }: any) => {
  const [open, setOpen] = useState(false);

  const LOCATION_MENU = {
    title: "CLINICS",
    items: [
      { id: 1, title: "Delhi" },
      { id: 2, title: "Mumbai" },
      { id: 3, title: "Lucknow" },
      { id: 4, title: "Noida" },
      { id: 5, title: "Ghaziabad" },
      { id: 6, title: "Faridabad" },
      { id: 7, title: "Jaipur" },
    ],
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        id={id}
        className="block text-sm md:text-base relative hover:scale-105 duration-500 cursor-pointer
        bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase w-full lg:w-fit
        hover:from-[#EC6724]/80 hover:to-[#F05432]/80 z-20
        text-white font-normal px-6 py-3 rounded-full shadow"
      >
        {buttonText}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black/80 overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl m-4 rounded-3xl bg-gradient-to-b from-[#1FA2D8] to-[#0B5FA5] p-4 lg:p-8 text-white z-99999"
            onClick={(e) => e.stopPropagation()} >

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 cursor-pointer text-white text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center">Request Callback</h2>
            <p className="text-center text-sm mt-2 opacity-90">
              Tell us a bit about your pain so we can connect you with the right specialist.
            </p>

            <div className="mt-6 h-fullpr-2">
              <form
                action="https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm2/formperma/XBy9lPuUYW-iiX-2yyXoXGpTLy3Yn4PLb8GjCBllefc/htmlRecords/submit"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                className="space-y-4 py-2"
              >
                <input type="hidden" name="utm_source" value="" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_campaign" value="" />
                <input type="hidden" name="utm_term" value="" />
                <input type="hidden" name="utm_content" value="" />
                <input type="hidden" name="utm_placement" value="" />
                <input type="hidden" name="utm_ad_id" value="" />
                <input type="hidden" name="utm_adset_id" value="" />
                <input type="hidden" name="utm_ad_name" value="" />
                <input type="hidden" name="utm_platform" value="" />
                <input type="hidden" name="utm_campaign_id" value="" />
                <input type="hidden" name="page_url" value="" />
                <input type="hidden" name="form_location" value="" />
                <input type="hidden" name="gclid" value="" />
                <input type="hidden" name="fbclid" value="" />
                <input type="hidden" name="SingleLine1" value="" />
                <input type="hidden" name="SingleLine10" value="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4">
                  <input
                    name="SingleLine"
                    required
                    placeholder="First Name *"
                    className="mb-2 w-full rounded-full bg-white px-6 py-2.5 lg:py-4 placeholder:text-sm lg:placeholder:text-base outline-none text-black text-sm lg:text-base"
                  />
                  <input
                    placeholder="Last Name"
                    className="mb-2 w-full rounded-full bg-white px-6 py-2.5 lg:py-4 placeholder:text-sm lg:placeholder:text-base outline-none text-black text-sm lg:text-base"
                  />
                  <input
                    name="PhoneNumber_countrycode"
                    required
                    type="text"
                    placeholder="Mobile Number *"
                    maxLength={10}
                    className="mb-2 w-full rounded-full bg-white px-6 py-2.5 lg:py-4 placeholder:text-sm lg:placeholder:text-base outline-none text-black text-sm lg:text-base"
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/\D/g, "");
                      if (input.value.length < 10) {
                        input.setCustomValidity("Please enter a valid 10-digit mobile number");
                      } else {
                        input.setCustomValidity("");
                      }
                    }}
                    onInvalid={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.setCustomValidity("Please enter a valid 10-digit mobile number");
                    }}
                  />
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="mb-2 w-full rounded-full bg-white px-6 py-2.5 lg:py-4 placeholder:text-sm lg:placeholder:text-base outline-none text-black text-sm lg:text-base"
                  />
                  <div className="relative">
                    <select
                      name="Dropdown1"
                      required
                      className="mb-2 w-full appearance-none rounded-full bg-white px-6 py-2.5 lg:py-4 outline-none text-black text-sm lg:text-base"
                    >
                      <option disabled >Select City *</option>
                      {LOCATION_MENU.items.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute lg:right-5 right-2.5 top-4.5 lg:top-1/2 -translate-y-1/2">
                      <MdKeyboardArrowDown className="text-2xl text-black" />
                    </span>
                  </div>
                  <div className="relative">
                    <select
                      name="Dropdown2"
                      className="mb-2 w-full appearance-none rounded-full bg-white px-6 py-2.5 lg:py-4 outline-none text-black text-sm lg:text-base"
                    >
                      <option disabled >Preferred Time for call back *</option>
                      <option value="Morning">Morning (9am – 12pm)</option>
                      <option value="Afternoon">Afternoon (12pm – 4pm)</option>
                      <option value="Evening">Evening (4pm – 8pm)</option>
                    </select>
                    <span className="pointer-events-none absolute lg:right-5 right-2.5 top-4.5 lg:top-1/2 -translate-y-1/2">
                      <MdKeyboardArrowDown className="text-2xl text-black" />
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-center mb-3">SELECT PAIN SITE *</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-base">
                    {["Knee", "Back", "Neck", "Shoulder", "Others"].map((item) => (
                      <label key={item} className="flex items-center gap-1 md:gap-2 cursor-pointer text-xs lg:text-base">
                        <input
                          type="checkbox"
                          name="Pain_Area"
                          value={item}
                          className="h-4 w-4 rounded accent-black"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-center mb-3">CHOOSE PAIN INTENSITY *</p>
                  <div className="flex justify-center gap-6 text-base">
                    {["Mild", "Moderate", "Severe"].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-xs lg:text-base">
                        <input
                          type="radio"
                          name="Pain_Intensity"
                          value={level}
                          required
                          className="accent-black"
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4 lg:mt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r cursor-pointer hover:scale-105 duration-500 from-[#EC6724] to-[#F05432] hover:opacity-90 px-8 py-2 lg:py-3 rounded-full font-medium lg:font-semibold text-sm lg:text-base shadow-lg"
                  >
                    REQUEST CALLBACK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestCallbackModal;
