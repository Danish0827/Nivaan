"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Full Name is required");
      return;
    }

    setError("");
    console.log({
      name,
      phone,
    });
  };

  return (
    <div className="mt-5 rounded-3xl lg:rounded-[40px] bg-gradient-to-b from-[#11A0D7] to-[#0F4C92] p-6 text-white">
      <h3 className="mb-4 text-center text-3xl font-semibold">
        Get A Call Back
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 w-full rounded-full bg-white px-4 py-4 outline-none text-black text-[13px]"
        />
        {error && (
          <p className="mb-2 text-sm text-red-200">{error}</p>
        )}
        <div className="mb-3 rounded-full bg-white px-4 py-2.5">
          <PhoneInput
            defaultCountry="in"
            value={phone}
            onChange={setPhone}
            inputClassName="!border-none !text-black"
            placeholder="Mobile Number"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-[#FF6A39] hover:bg-[#FF6A39]/90 py-3 cursor-pointer font-normal hover:scale-[1.02] duration-500"
        >
          REQUEST CALL BACK
        </button>
      </form>
    </div>
  );
}
