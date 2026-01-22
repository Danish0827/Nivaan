"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function LandingCallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");

    if (!name.trim()) {
      e.preventDefault();
      setError("Please enter your full name");
      return;
    }

    if (!phone.trim()) {
      e.preventDefault();
      setError("Please enter your mobile number");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      e.preventDefault();
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
  };

  return (
    <div className="mt-5 rounded-3xl lg:rounded-[40px] bg-gradient-to-b from-[#11A0D7] to-[#0F4C92] p-6 text-white w-full">
      <h3 className="mb-4 text-center text-3xl lg:text-2xl xl:text-3xl font-semibold">
        Get A Call Back
      </h3>
      <form action="https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm2/formperma/XBy9lPuUYW-iiX-2yyXoXGpTLy3Yn4PLb8GjCBllefc/htmlRecords/submit"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="w-full"
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
        <input
          type="text"
          placeholder="Full Name *"
          name="SingleLine"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base"
        />
        {error && (
          <p className="mb-2 text-sm text-red-200">{error}</p>
        )}
        <input
          type="number"
          placeholder="Mobile Number *"
          name="PhoneNumber_countrycode"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base"
        />
        {error && (
          <p className="mb-2 text-sm text-red-200">
            {error}
          </p>
        )}
        {/* </div> */}
        <div className="flex justify-center items-center">
        <button
          type="submit"
          className="w-2/3 mx-auto rounded-full bg-[#FF6A39] hover:bg-[#FF6A39]/90 py-3 cursor-pointer font-normal hover:scale-[1.02] duration-500"
        >
          REQUEST CALL BACK
        </button>
        </div>
      </form>
    </div>
  );
}
