import { useState } from "react";

const RequestCallbackModal = ({ buttonText = "BOOK APPOINTMENT" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:block hover:scale-105 duration-500 cursor-pointer
        bg-gradient-to-r from-[#EC6724] to-[#F05432]
        hover:from-[#EC6724]/80 hover:to-[#F05432]/80
        text-white font-semibold px-6 py-3 rounded-full shadow"
      >
        {buttonText}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-2xl mx-4 rounded-3xl bg-gradient-to-b from-[#1FA2D8] to-[#0B5FA5] p-8 text-white">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-center">Request Callback</h2>
            <p className="text-center text-sm mt-2 opacity-90">
              Tell us a bit about your pain so we can connect you with the right specialist.
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base" placeholder="First Name *" />
                <input className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base" placeholder="Last Name *" />
                <input className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base" placeholder="Mobile Number *" />
                <input className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base" placeholder="Email Address" />
                <select className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base">
                  <option>Select City *</option>
                </select>
                <div className="relative">
  <select
    className="mb-2 w-full appearance-none rounded-full bg-white px-4 py-4 pr-12 outline-none text-black text-base"
  >
    <option>Preferred Time for call back *</option>
    <option>Morning (9am – 12pm)</option>
    <option>Afternoon (12pm – 4pm)</option>
    <option>Evening (4pm – 8pm)</option>
  </select>

  {/* Custom Arrow */}
  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
    ▼
  </span>
</div>
              </div>

              <select className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base">
                <option>Select Pain Area *</option>
              </select>

              {/* Pain Site */}
              <div>
                <p className="font-semibold text-center mb-2">SELECT PAIN SITE *</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {["Knee", "Back", "Neck", "Shoulder", "Other"].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Pain Intensity */}
              <div>
                <p className="font-semibold text-center mb-2">CHOOSE PAIN INTENSITY *</p>
                <div className="flex justify-center gap-6 text-sm">
                  {["Mild", "Moderate", "Severe"].map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input type="radio" name="intensity" />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#EC6724] to-[#F05432]
                  hover:opacity-90 px-8 py-3 rounded-full font-semibold"
                >
                  REQUEST CALLBACK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestCallbackModal;
