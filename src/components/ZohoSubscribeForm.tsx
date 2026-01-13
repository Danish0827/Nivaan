"use client"
import { useRef } from "react";

const ZohoSubscribeForm = () => {
   const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 500);
  };
  return (
    <form
     ref={formRef}
      action="https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm2/formperma/XBy9lPuUYW-iiX-2yyXoXGpTLy3Yn4PLb8GjCBllefc/htmlRecords/submit"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="lg:w-1/3 xl:w-1/2 flex flex-col lg:flex-row items-center justify-end gap-4 mt-6"
    >

      <input type="hidden" name="utm_source" value="" />
      <input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" />
      <input type="hidden" name="page_url" value="" />
      <input type="hidden" name="PhoneNumber_countrycode" value="0000000000" />

      <input
        type="text"
        name="SingleLine"
        placeholder="Your Name"
        required
        className="w-full lg:w-[300px] px-6 py-4 rounded-full shadow-sm text-black focus:outline-orange-500 bg-white placeholder:text-gray-400"
      />


      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        required
        className="w-full lg:w-[300px] px-6 py-4 rounded-full shadow-sm text-black focus:outline-orange-500 bg-white placeholder:text-gray-400"
      />

      <button
        type="submit"
        className="block hover:scale-105 duration-500 cursor-pointer
        bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase
        hover:from-[#EC6724]/80 hover:to-[#F05432]/80
        text-white font-normal px-6 py-4 rounded-full shadow"
      >
        SUBSCRIBE
      </button>
    </form>
  );
};

export default ZohoSubscribeForm;
