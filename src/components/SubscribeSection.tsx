import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import { rubikBold, rubikReg } from "@/app/fonts";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleButtonClick = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email) {
      setError("Please enter your Email to continue");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid Email address");
    } else {
      const form = document.getElementById('form') as HTMLFormElement;
      if (form) {
        form.submit();
      }
    }
  };

  return (
    <form 
      action='https://forms.zohopublic.in/nivaancare/form/SubscribeFormLandingPageHTML/formperma/zdBFvpDSWEsv48BCoPdunS51V9Kv5g258NU0sOptBqw/htmlRecords/submit' 
      name='form' 
      id='form' 
      method='POST' 
      acceptCharset="UTF-8"
      className="flex flex-col gap-3"
    >
      {/* Hidden tracking inputs */}
      <input type="hidden" name="zf_referrer_name" value="" />
      <input type="hidden" name="zf_redirect_url" value="" />
      <input type="hidden" name="zc_gad" value="" />
      <input type="hidden" name="utm_source" value=""/>
      <input type="hidden" name="utm_medium" value=""/>
      <input type="hidden" name="utm_campaign" value=""/>
      <input type="hidden" name="utm_term" value=""/>
      <input type="hidden" name="utm_content" value=""/>
      <input type="hidden" name="page_url" value=""/>

      {/* Email Input */}
      {/* <div>
        <input 
          type="text" 
          name="SingleLine"
          placeholder="Enter your email address" 
          className={`${rubikReg.className} w-[14rem] text-xs rounded-lg px-6 py-3 text-black ${error ? "border border-solid border-[#CA3F3F] placeholder-[#CA3F3F]" : "border border-gray-300"}`}
          value={email}
          onChange={handleEmailChange}
        />
        {error && (
          <p className="text-[#CA3F3F] text-xs mt-1">{error}</p>
        )}
      </div> */}

      {/* Subscribe Button + Social Icons */}
      <div className="flex flex-row items-center gap-4">
        <SocialIcon />
        {/* <Button 
          type="button"
          className={`${rubikBold.className} text-[#2F438F] bg-white text-sm rounded-md px-7 py-3 border border-[#2F438F]`}
          onClick={handleButtonClick}
        >
          Subscribe
        </Button> */}
      </div>
    </form>
  );
};

export default SubscribeSection;
