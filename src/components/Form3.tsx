//@ts-nocheck
"use client";
import { Check, MoveRight, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { rubikReg, rubikSemiBold, montserratLightBold, montserratSemiBold, montserratNormal, montserratSemiSemiBold } from "@/app/fonts";
import { sendGTMEvent } from "@next/third-parties/google";
import SubscribeButton from "./SubscribeButton";
import { Loader2 } from "lucide-react";

const defaultFormAction = "https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm3/formperma/hTJFHJXqmwrb3MqsyWgRb5RQaHfK8dAJJECsvvVwJBc"

const Form3 = ({
  subHeading,
  formLocation,
  formActionLink = defaultFormAction,
  formName,
}: {
  formActionLink?: string;
  subHeading?: string;
  formName?:
  | "Hero-Section-Form"
  | "Bottom-Open-Form"
  | "NavBar-Form"
  | "Doctor-Form"
  | "Floating-Button-Form";
  header?: string;
  formLocation?: string;
  setModal?: any;
}) => {
  const pathName = usePathname();
  const [currentUrl, setCurrentUrl] = useState<{
    hostname: string;
    url: string;
  }>({ hostname: "", url: "" });
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLSelectElement>(null);
  const inputRef4 = useRef<HTMLSelectElement>(null);
  const inputRef5 = useRef<HTMLSelectElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [selectedPainSites, setSelectedPainSites] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState("");
  const [keywords, setKeywords] = useState("");
  const [matchtype, setMatchtype] = useState("");
  const [errors, setErrors] = useState({ firstName: "", lastName: "", phoneNumber: "" });
  const searchParams = useSearchParams();
  console.log(searchParams)
  const utm_source = searchParams.get("utm_source") ?? "";
  const utm_location = searchParams.get("utm_location") ?? "";
  const utm_medium = searchParams.get("utm_medium") ?? "";
  const utm_campaign = searchParams.get("utm_campaign") ?? "";
  const utm_term = searchParams.get("utm_term") ?? "";
  const utm_content = searchParams.get("utm_content") ?? "";
  const utm_placement = searchParams.get("utm_placement") ?? "";
  const utm_ad_id = searchParams.get("utm_ad_id") ?? "";
  const utm_adset_id = searchParams.get("utm_adset_id") ?? "";
  const utm_ad_name = searchParams.get("utm_ad_name") ?? "";
  const utm_platform = searchParams.get("utm_platform") ?? "";
  const utm_campaign_id = searchParams.get("utm_campaign_id") ?? "";
  const gclid = searchParams.get("gclid") ?? "";
  const fbclid = searchParams.get("fbclid") ?? "";
  const keyword = searchParams.get("keyword") ?? "";
  const [selectedValues, setSelectedValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentUrl({
      hostname: window.location.hostname,
      url: window.location.href,
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName || !lastName || !phoneNumber || !selectedTime || !selectedIntensity) {
      setErrors({
        firstName: !firstName ? "First name is required" : "",
        lastName: !lastName ? "Last name is required" : "",
        phoneNumber: !phoneNumber ? "Phone number is required" : "",
        checkbox: selectedValues.length === 0 ? "Please select at least one pain site." : "",
        time: !selectedTime ? "Preferred time is required." : "",
        intensity: !selectedIntensity ? "Pain intensity is required." : "",
      });
      return;
    }

    setIsLoading(true);

    try {
      if (firstName && lastName && phoneNumber && selectedTime && selectedIntensity && isValid) {
        sendGTMEvent({
          event: "Form Submission",
          value: {
            "Form Name": formName,
            "CTA Button text": "Consult Now",
            "Landing Page URL": currentUrl.url,
          },
        });
      }
    } catch (e) {
      console.log("Submission error: ", e)
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoading = () => {
    if (!firstName || !lastName || !phoneNumber || !selectedTime || !selectedIntensity) {
      setErrors({
        firstName: !firstName ? "First name is required" : "",
        lastName: !lastName ? "Last name is required" : "",
        phoneNumber: !phoneNumber ? "Phone number is required" : "",
        checkbox: selectedValues.length === 0 ? "Please select at least one pain site." : "",
        time: !selectedTime ? "Preferred time is required." : "",
        intensity: !selectedIntensity ? "Pain intensity is required." : "",
      });
      //event.preventDefault();
      return;
    }

    setIsLoading(true)

    if (firstName && lastName && phoneNumber && selectedTime && selectedIntensity && isValid) {
      sendGTMEvent({
        event: "Form Submission",
        value: {
          "Form Name": formName,
          "CTA Button text": "Consult Now",
          "Landing Page URL": currentUrl.url,
        },
      });
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const value = event.target.value;
    if (field === "firstName") {
      const regex = /^\s*[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*\s*$/;
      setFirstName(value);
      if (regex.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
      } else {
        setFirstName(value.slice(0, value.length - 1));
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: "Please enter a valid first name.",
        }));
      }
    }
    if (field === "lastName") {
      const regex = /^\s*[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*\s*$/;
      setLastName(value);
      if (regex.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
      } else {
        setLastName(value.slice(0, value.length - 1));
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: "Please enter a valid last name.",
        }));
      }
    }
    if (field === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      setPhoneNumber(numericValue);
      if (numericValue === "" || /^[6-9]{1}[0-9]{0,9}$/.test(numericValue)) {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Please enter a valid phone number",
        }));
      }
    }

    if (field === "city") {
      setCity(value);
      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
    }

    if (field === "time") {
      setSelectedTime(value);
      setErrors((prevErrors) => ({ ...prevErrors, time: "" })); // Clear error for time
    }

    if (field === "intensity") {
      setSelectedIntensity(value);
      setErrors((prevErrors) => ({ ...prevErrors, intensity: "" })); // Clear error for intensity
    }

    if (field === "painSite") {
      setErrors((prevErrors) => ({ ...prevErrors, checkbox: "" }));
    }
  };

  const isValid =
    !(parseInt(phoneNumber.charAt(0)) < 5) && phoneNumber.length === 10;

  const handleCheckBoxClick = (value) => {
    setSelectedValues((prevSelectedValues) => {
      const newSelectedValues = prevSelectedValues.includes(value)
        ? prevSelectedValues.filter((option) => option !== value)
        : [...prevSelectedValues, value];
      if (newSelectedValues.length > 0) {
        setErrors((prevErrors) => ({ ...prevErrors, checkbox: "" }));
      }

      return newSelectedValues;
    });
  };

  const painValue = selectedValues.join(",");
  return (
    <form
      action={
        "https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm3/formperma/UyezgCEfx59eTosGp88LjOOM8z3bpZ3o-bdQ6DH1z6U/htmlRecords/submit"
      }
      onSubmit={handleLoading}
      name="form"
      id="form"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="bg-white w-full min-w-[340px] lg:w-[480px] p-4 rounded-xl relative md:pt-6 z-[99] shadow-lg border-[1px] border-[#F4F3ED] md:pb-6"
    >
      <input type="hidden" name="utm_source" value={utm_source} />
      <input type="hidden" name="utm_location" value={utm_location} />
      <input type="hidden" name="utm_medium" value={utm_medium} />
      <input type="hidden" name="utm_campaign" value={utm_campaign} />
      <input type="hidden" name="utm_term" value={utm_term} />
      <input type="hidden" name="utm_content" value={utm_content} />
      <input type="hidden" name="utm_placement" value={utm_placement} />
      <input type="hidden" name="utm_ad_id" value={utm_ad_id} />
      <input type="hidden" name="utm_adset_id" value={utm_adset_id} />
      <input type="hidden" name="utm_ad_name" value={utm_ad_name} />
      <input type="hidden" name="utm_platform" value={utm_platform} />
      <input type="hidden" name="utm_campaign_id" value={utm_campaign_id} />
      <input type="hidden" name="page_url" value={currentUrl.url} />
      <input type="hidden" name="form_location" value={formLocation} />
      <input type="hidden" name="gclid" value={gclid} />
      <input type="hidden" name="fbclid" value={fbclid} />
      <input type="hidden" name="SingleLine1" value={keyword} />
      <input type="hidden" name="SingleLine10" value={painValue} />
      <h2
        className={` ${montserratSemiBold.className} text-center my-0 lg:my-2 text-base md:text-xl lg:mb-4 text-[#2F438F]`}
      >
        Request a Call Back
      </h2>
      <p className="text-center text-[10px] lg:text-left">{subHeading}</p>
      <div className="flex flex-col gap-0 lmd:gap-2 mt-2 md:mt-2">
        <div>
          <div className="flex flew-row">
            <div className="flex flex-col mb-1 mt-3 lg:mt-4 lg:mb-2">
              <div
                className="flex rounded-lg items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888]"
                onClick={() => inputRef2.current?.focus()}
              >
                <input
                  placeholder="First Name *"
                  type="text"
                  name="SingleLine11"
                  value={firstName}
                  maxLength={255}
                  ref={inputRef2}
                  onChange={(event) => handleInputChange(event, "firstName")}
                  className={`${montserratNormal.className} p-2 rounded-lg outline-none flex-1 border border-solid border-black h-[45px] text-[12.59px] w-[8.5rem] md:w-48`}
                />
              </div>
              {errors.firstName && <p className="mt-2 text-red-600 text-xs">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col mb-1 mt-3 lg:mt-4 lg:mb-2">
              <div
                className="flex rounded-lg items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888]"
                onClick={() => inputRef3.current?.focus()}
              >
                <input
                  placeholder="Last Name *"
                  type="text"
                  name="SingleLine"
                  value={lastName}
                  maxLength={255}
                  ref={inputRef3}
                  onChange={(event) => handleInputChange(event, "lastName")}
                  className={`${montserratNormal.className} p-2 rounded-lg outline-none flex-1 border border-solid border-black h-[45px] text-[12.59px] w-[8.5rem] md:w-48 `}
                />
              </div>
              {errors.lastName && <p className="mt-2 text-red-600 text-xs">{errors.lastName}</p>}
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-1 mt-3 lg:mt-4 lg:mb-2">
          <div className="flex flex-row gap-0">   
            <div
              className="flex rounded-lg items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888] w-44 md:w-52"
              onClick={() => inputRef.current?.focus()}
            >
              <input
                placeholder="Mobile Number *"
                type="text"
                name="PhoneNumber_countrycode"
                maxLength={10}
                value={phoneNumber}
                id="international_PhoneNumber_countrycode"
                ref={inputRef}
                onChange={(event) => handleInputChange(event, "phoneNumber")}
                className={`${montserratNormal.className} p-2 rounded-lg outline-none flex-1 border border-solid border-black h-[45px] text-[12.59px] w-48`}
              />
            </div>
            <div
              className="flex items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888] rounded-lg w-32 md:w-52"
              onClick={() => inputRef4.current?.focus()}
            >
              <select
                ref={inputRef4}
                name="Dropdown1"
                value={city}
                onChange={(event) => handleInputChange(event, "city")}
                className="outline-none flex-1 p-2 rounded-lg border border-solid border-black w-48 h-[45px] text-[12.59px]"
              >
                <option>City</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Noida">Noida</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Meerut">Meerut</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          {errors.phoneNumber && <p className="mt-2 text-red-600 text-xs">{errors.phoneNumber}</p>}
        </div>

        <div className="flex flex-col mb-1 mt-3 lg:mt-4 lg:mb-2">
          <h4
            className={`text-[0.625rem] md:text-base pl-2 text-[#181818] mb-2 lg:mb-2 font-bold ${montserratSemiSemiBold.className}`}
          >
            Pain Site
            <span
              className={`text-[#CA4A33] font-normal text-[0.5rem] md:text-xs ${rubikReg.className}`}
            >{` *`}</span>
          </h4>
          <div className="flex flex-row justify-between px-4 items-center">
            {['Back', 'Neck', 'Knee', 'Other'].map((item, index) => (
              <div key={item} className="flex flex-col items-center justify-center">
                <input
                  type="checkbox"
                  id={`Checkbox_${index + 1}`}
                  checked={selectedValues.includes(item)}
                  onChange={() => handleCheckBoxClick(item)}
                  className="border-[#51B4EF] border-[1px] w-5 h-5 rounded-sm"
                  key={index}
                />
                <label
                  htmlFor={`Checkbox_${index + 1}`}
                  className="text-black text-xs md:text-sm mt-2"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
          <p className="mt-2 text-red-600 text-xs">{errors.checkbox}</p>
        </div>

        <div className="flex flex-col mb-1 mt-1 md:mt-3 lg:my-2">
          <h4
            className={`text-[0.625rem] md:text-base text-[#181818] pl-2 mb-2 lg:mb-2 font-bold ${montserratSemiSemiBold.className}`}
          >
            Preferred Time for call back
            <span
              className={`text-[#CA4A33] font-normal text-[0.5rem] md:text-xs ${rubikReg.className}`}
            >{` *`}</span>
          </h4>
          <div
            className="flex items-center text-[0.625rem] p-1 px-2 lg:text-sm text-[#888888] rounded-lg"
            onClick={() => inputRef5.current?.focus()}
          >
            <select
              ref={inputRef5}
              name="Dropdown"
              value={selectedTime}
              onChange={(event) => handleInputChange(event, "time")}
              className="outline-none p-2 rounded-lg border border-solid border-black w-full mr-8"
            >
              <option selected="true" value="-Select-">Select Time</option>
              <option value="Morning&#x20;&#x28;8AM&#x20;-&#x20;12PM&#x29;">Morning (8AM - 12PM)</option>
              <option value="Afternoon&#x20;&#x28;12PM&#x20;-&#x20;4PM&#x29;">Afternoon (12PM - 4PM)</option>
              <option value="Evening&#x20;&#x28;4PM&#x20;-&#x20;8PM&#x29;">Evening (4PM - 8PM)</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>
          <p className="mt-2 text-red-600 text-xs">{errors.time}</p>
        </div>

        <div className="flex flex-col mb-1 mt-1 lg:my-2">
          <h4
            className={`pl-2 text-[0.625rem] md:text-base text-[#181818] mb-2 lg:mb-2 ${montserratSemiSemiBold.className}`}
          >
            Pain Intensity
            <span
              className={`text-[#CA4A33] font-normal text-[0.5rem] md:text-xs ${rubikReg.className}`}
            >{` *`}</span>
          </h4>
          <div className="flex flex-row px-2 items-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <input type="radio" id="Radio_1" name="Radio" value="Mild" onChange={(event) => handleInputChange(event, "intensity")} />
              <label for="Radio_1" className={`${montserratSemiSemiBold.className} text-[#181818B2] text-xs md:text-sm mt-2`}>Mild</label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input type="radio" id="Radio_2" name="Radio" value="Moderate" onChange={(event) => handleInputChange(event, "intensity")} />
              <label for="Radio_2" className={`${montserratSemiSemiBold.className} text-[#181818B2] text-xs md:text-sm mt-2`}>Moderate</label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input type="radio" id="Radio_3" name="Radio" value="Severe" onChange={(event) => handleInputChange(event, "intensity")} />
              <label for="Radio_3" className={`${montserratSemiSemiBold.className} text-[#181818B2] text-xs md:text-sm mt-2`}>Severe</label>
            </div>
          </div>
          <p className="mt-2 text-red-600 text-xs">{errors.intensity}</p>
        </div>

        {/* <div>
          {!isValid && (
            <p className="text-red-600 text-xs ">{errors.phoneNumber}</p>
          )}
        </div> */}
      </div>
      <div className="flex justify-center mt-0">
        {!phoneNumber ||
          !firstName ||
          !lastName ||
          !isValid ||
          selectedValues.length === 0 ? (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              if (!phoneNumber || !firstName || !lastName || !selectedTime || !selectedIntensity || selectedValues.length === 0) {
                setErrors({
                  firstName: !firstName ? "First name is required" : "",
                  lastName: !lastName ? "Last name is required" : "",
                  phoneNumber: !phoneNumber ? "Phone number is required" : "",
                  checkbox: selectedValues.length === 0 ? "Please select at least one pain site." : "",
                  time: !selectedTime ? "Preferred time is required." : "",
                  intensity: !selectedIntensity ? "Pain intensity is required." : "",
                });
              }
            }}
            className="bg-[#E47642] rounded-2xl flex gap-2 shadow-sm mt-2 lg:mt-0 px-8 text-white font-semibold p-2 text-base"
          >
            Submit Now
          </button>
          // <SubscribeButton onClick={handleSubmit} title="Submit Now"  />
        ) : (
          <button
            disabled={isLoading}
            onSubmit={handleSubmit}
            type="submit"
            className="bg-[#E47642] rounded-2xl flex gap-2 shadow-sm mt-2 lg:mt-0 px-8 text-white font-semibold p-2 text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Now'
            )}
          </button>
          // <SubscribeButton onClick={handleSubmit} title="Submit Now" />
        )}
      </div>
      {/* <div className="flex justify-center mt-0">
        <SubscribeButton
          handleSubmit={handleSubmit}
          isFormValid={phoneNumber && isValid && selectedValues.length !== 0}
          title="Submit Now"
        />
      </div> */}
    </form>
  );
};

export default Form3;