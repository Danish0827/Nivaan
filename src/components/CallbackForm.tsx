"use client";
import { useState } from "react";
import "react-international-phone/style.css";

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handlePhoneChange = (e:any) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
      setError2("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setError2("");

    if (!name.trim()) {
      e.preventDefault();
      setError("Please enter your full name");
    }

    if (!phone.trim()) {
      e.preventDefault();
      setError2("Please enter your mobile number");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      e.preventDefault();
      setError2("Please enter a valid 10-digit mobile number");
      return;
    }
  };

  return (
    <div className="mt-5 rounded-3xl lg:rounded-[40px] bg-gradient-to-b from-[#11A0D7] to-[#0F4C92] p-6 text-white">
      <h3 className="mb-4 text-center text-3xl lg:text-2xl xl:text-3xl font-semibold">
        Get A Call Back
      </h3>

      <form
        action="https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm2/formperma/XBy9lPuUYW-iiX-2yyXoXGpTLy3Yn4PLb8GjCBllefc/htmlRecords/submit"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
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
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base"
        />
        {error && <span className="text-sm text-red-200">{error}</span>}

        <input
          type="text"
          name="PhoneNumber_countrycode"
          placeholder="Mobile Number *"
          value={phone}
          maxLength={10}
          required
          className="mb-2 mt-4 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-base"
          onChange={handlePhoneChange}
          onInvalid={(e) => {
            const input = e.target as HTMLInputElement;
            input.setCustomValidity("Please enter a valid 10-digit mobile number");
          }}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            if (input.value.length === 10) {
              input.setCustomValidity("");
            }
          }}
        />

        {error2 && <span className="text-sm text-red-200">{error2}</span>}

        <button
          type="submit"
          className="w-full mt-4 rounded-full bg-[#FF6A39] hover:bg-[#FF6A39]/90 py-3 cursor-pointer font-normal hover:scale-[1.02] duration-500"
        >
          REQUEST CALL BACK
        </button>
      </form>
    </div>
  );
}
