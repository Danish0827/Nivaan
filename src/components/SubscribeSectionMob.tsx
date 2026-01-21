import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button"
import { rubikBold, rubikReg } from "@/app/fonts";

const SubscribeSectionMob = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      setError("");
    };
  
    const handleButtonClick = () => {
      // Simple email validation regex
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
      // Validate email input
      if (!email) {
        setError("Please enter your Email to continue");
      } else if (!emailRegex.test(email)) {
        setError("Please enter a valid Email address");
      } else {
        // If validation passes, submit the form
        const form = document.getElementById('form') as HTMLFormElement;
        if (form) {
          form.submit();
        }
      }
    };

    return (
      <form 
        className="flex flex-col"
        action='https://forms.zohopublic.in/nivaancare/form/SubscribeFormLandingPageHTML/formperma/zdBFvpDSWEsv48BCoPdunS51V9Kv5g258NU0sOptBqw/htmlRecords/submit' 
        name='form' 
        id='form' 
        method='POST' 
        acceptCharset="UTF-8"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="utm_source" value=""/>
        <input type="hidden" name="utm_medium" value=""/>
        <input type="hidden" name="utm_campaign" value=""/>
        <input type="hidden" name="utm_term" value=""/>
        <input type="hidden" name="utm_content" value=""/>
        <input type="hidden" name="page_url" value=""/>
        <div className="flex flex-row gap-2 mb-3">
          {/* <input 
            type="text" 
            name="SingleLine"
            placeholder="Enter your email address" 
            className={`${rubikReg.className} rounded-lg px-2 py-1 w-48 h-8 text-xs ${error ? "border border-solid border-[#CA3F3F] text-[#CA3F3F] placeholder-[#CA3F3F]" : "text-black"}`} 
            value={email}
            onChange={handleEmailChange}
          /> */}
          {/* <Button 
            type="button"
            className={`${rubikBold.className} text-[#2F438F] bg-white text-xs rounded-md w-20 h-8`}
            onClick={handleButtonClick}
          >
            Subscribe
          </Button> */}
        </div>
        {error && (
          <p className="text-[#CA3F3F] text-xs text-center mb-2">{error}</p>
        )}
        <SocialIcon />
      </form>
    )
  }

  export default SubscribeSectionMob;