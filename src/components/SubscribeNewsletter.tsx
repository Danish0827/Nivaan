'use client'
import React, { useState } from 'react';
import SubscribeButton from './SubscribeButton';
import { montserratNormal, montserratSemiBold } from '@/app/fonts';

const SubscribeNewsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(""); // Reset error when user starts typing
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setEmail("");
  };

  return (
    <div className='border border-solid border-black rounded-2xl w-[90%] md:w-[60%] mx-auto py-7 px-4 md:py-14 md:px-40 mb-8'>
      <h1 className={`${montserratSemiBold.className} text-[#2F438F] mx-4 text-center mb-6 text-xl md:text-4xl`}>Subscribe To Our Newsletter</h1>
      <p className={`${montserratNormal.className} mb-8 text-center`}>Get the latest insights, tips, tricks delivered to your inbox</p>
      <div className="flex flex-col rounded-3xl items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888]">
        <input
          placeholder="Enter Your Email Address"
          type="email"
          name="subscription_email"
          value={email}
          id="subscription_email"
          onChange={handleInputChange}
          className="px-6 py-4 rounded-3xl outline-none flex-1 border border-solid border-black mb-2 w-full text-xs"
        />
        {error && <span className="text-red-600 text-xs">{error}</span>}
      </div>
      <SubscribeButton title='Subscribe Now' onClick={handleSubmit} />
    </div>
  );
};

export default SubscribeNewsletter;
