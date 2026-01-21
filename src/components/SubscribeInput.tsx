'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import subscribeIcon from "../../public/submitIcon.webp"

const SubscribeInput: React.FC = () => {
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
      acceptCharset='UTF-8'
      className="relative"
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
      <div>
        <input
          type="text"
          name="SingleLine"
          placeholder="Enter your email address"
          className="text-xs text-white w-full px-4 py-2 pr-16 border rounded-full bg-transparent border-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={handleEmailChange}
        />
        {error && (
            <p className="text-[#CA3F3F] text-xs mt-1">{error}</p>
          )}
      </div>
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-1.5 py-1 cursor-pointer bg-[#DA7343] rounded-full"
      >
        <Image
          src={subscribeIcon}
          alt="Subscribe"
          className="w-6 h-6 rounded-full"
          unoptimized
        />
      </button>
    </form>
  );
};

export default SubscribeInput;