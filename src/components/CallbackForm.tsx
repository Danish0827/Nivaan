"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function CallbackForm() {
  return (
    <div className="mt-5 rounded-3xl lg:rounded-[40px] bg-gradient-to-b from-[#11A0D7] to-[#0F4C92] p-6 text-white">
      <h3 className="mb-4 text-center text-3xl font-semibold">
        Get A Call Back
      </h3>

      <input
        type="text"
        placeholder="Full Name *"
        className="mb-3 w-full rounded-full bg-white px-4 py-4 outline-none text-black"
      />

      <div className="mb-3 rounded-full bg-white px-4 py-2.5">
        <PhoneInput
          defaultCountry="in"
          inputClassName="!border-none !text-black"
          className="!rounded-full placeholder:"
        />
      </div>

      <button className="w-full rounded-full bg-[#FF6A39] hover:bg-[#FF6A39]/90 py-4 cursor-pointer font-semibold">
        REQUEST CALL BACK
      </button>
    </div>
  );
}
