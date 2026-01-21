'use client';
import React, { useState } from "react";
import SubscribeButton from "./SubscribeButton";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email) {
      setError("Please enter your Email to continue");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid Email address");
    } else {
      // If validation passes, submit the form
      // Use event.currentTarget to submit the form
      event.currentTarget.submit();
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
      onSubmit={handleFormSubmit}
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
      <div className="flex flex-col rounded-3xl items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888]">
        <input
          type="text" 
          name="SingleLine"
          placeholder="अपना ईमेल पता दर्ज करें" 
          className="px-6 py-4 rounded-3xl outline-none flex-1 border border-solid border-black mb-2 w-full text-xs"
          value={email}
          onChange={handleEmailChange}
        />
        {error && (
          <p className="text-[#CA3F3F] text-xs mt-1">{error}</p>
        )}
      </div>
      <SubscribeButton title='अभी सब्सक्राइब करे' type="submit" />
    </form>
  );
}

export default SubscribeForm;