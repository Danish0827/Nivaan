"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { rubikReg, rubikSemiBold } from "@/app/fonts";
import { sendGTMEvent } from "@next/third-parties/google";
import { Loader2, LocateOff } from "lucide-react";

const defaultFormAction =
  "https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm/formperma/Y2HL_Hh_THFjClPHcsQQZEjs07EIREE70jNJB07Srvk/htmlRecords/submit";

const Form_new = ({
  subHeading,
  formLocation,
  formActionLink = defaultFormAction,
  formName,
  pageRoute,
  location="",
}: {
  formActionLink?: string;
  subHeading?: string;
  formName?:
    | "Hero-Section-Form"
    | "Bottom-Open-Form"
    | "NavBar-Form"
    | "Doctor-Form"
    | "Floating-Button-Form"
    | "Why-Nivaan-Form"
    | "FormAd-Form";
  header?: string;
  formLocation?: string;
  setModal?: any;
  pageRoute?: string;
  location?: string;
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
  const landingPageUrl = `${origin}${pathName}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLSelectElement>(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [errors, setErrors] = useState({fullName: "", phoneNumber: "", city: "",zone:"", common: ""});
  const searchParams = useSearchParams();
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
  const keyword = searchParams.get("keyword") ?? "";
  const [isLoading, setIsLoading] = useState(false);
  const gclid = searchParams.get("gclid") ?? "";
  const fbclid = searchParams.get("fbclid") ?? "";

  useEffect(() => {
    setCurrentUrl({
      hostname: window.location.hostname,
      url: window.location.href,
    });
  }, []);

  const handleSubmit = async () => {
    const allFieldsEmpty = !fullName && !phoneNumber && !city;
  
    if (allFieldsEmpty || !fullName || !phoneNumber || !city) {
      setErrors({
        fullName: !fullName ? "Please enter your Full Name to continue" : "",
        phoneNumber: !phoneNumber ? "Please enter your Phone Number to continue" : "",
        city: !city ? "Please enter your City to continue" : "",
        zone: (!zone && location == "mumbai") ? "Please select your Zone to continue" :"",
        common: allFieldsEmpty ? "Fill In Your Details" : "",
      });
      return;
    }
  
    setIsLoading(true);
  
    try {
      if (location=="mumbai"){
        if (fullName && phoneNumber && city && zone) {
          sendGTMEvent({
            event: "Form_Submit",
            value: {
              "Form Name": formName,
              "Phone Number": `+91${phoneNumber}`,
            },
          });
        }
      }else{
        if (fullName && phoneNumber && city) {
          sendGTMEvent({
            event: "Form_Submit",
            value: {
              "Form Name": formName,
              "Phone Number": `+91${phoneNumber}`,
            },
          });
        }
      }
      
    } catch (e) {
      console.log("Submission error: ", e);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLoading = () => {
    const allFieldsEmpty = !fullName && !phoneNumber && !city;
  
    if (allFieldsEmpty || !fullName || !phoneNumber || !city) {
      setErrors({
        fullName: !fullName ? "Please enter your Full Name to continue" : "",
        phoneNumber: !phoneNumber ? "Please enter your Phone Number to continue" : "",
        city: !city ? "Please enter your City to continue" : "",
        zone: (!zone && location == "mumbai") ? "Please select your Zone to continue" :"",
        common: allFieldsEmpty ? "Fill In Your Details" : "",
      });
      return;
    }
  
    setIsLoading(true);

    if(location=="mumbai"){
      if (fullName && phoneNumber && city && zone && isValid) {
        sendGTMEvent({
          event: "Form_Submit",
          value: {
            "Form Name": formName,
            "Phone Number": `+91${phoneNumber}`,
          },
        });
      }
    }else{
      if (fullName && phoneNumber && city && isValid) {
        sendGTMEvent({
          event: "Form_Submit",
          value: {
            "Form Name": formName,
            "Phone Number": `+91${phoneNumber}`,
          },
        });
      }
    }
  
    
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const value = event.target.value;

    if (field === "fullName") {
      setFullName(value);
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, fullName: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "Please enter a valid name",
        }));
      }
    }

    if (field === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      localStorage.setItem('phoneNumber', numericValue);
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
    if (field === "zone") {
      setCity("Mumbai");
      setZone(value);
      setErrors((prevErrors) => ({ ...prevErrors, zone: "" }));
    }

    setErrors((prevErrors) => ({ ...prevErrors, common: "" }));
  };

  const isValid =
    phoneNumber.length === 10 && /^[2-9]{1}[0-9]{9}$/.test(phoneNumber);

  return (
    <form
    style={{zIndex:1}}
      action={formActionLink}
      onSubmit={handleLoading}
      name="form"
      id="form"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="bg-white w-full min-w-[305px] lg:w-[440px] p-4 rounded-xl relative md:pt-6 z-[99] shadow-lg border-[1px] border-[#F4F3ED] md:pb-6"
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

      <h2 
        className={` ${rubikSemiBold.className} text-center my-0 text-xl md:text-3xl md:mb-3 text-[#2F438F]` }
      >
        Book Consultation
      </h2>
      {errors.common && (
        <p className="text-center text-[#CA3F3F] font-semibold mb-4">
          {errors.common}
        </p>
      )}
      <p className="text-center text-[16px] lg:text-left">{subHeading}</p>
      {/* {showErrorMessage && (
        <p className="text-center text-[#CA3F3F] text-sm mt-2">
          Fill In Your Details
        </p>
      )} */}
      <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
        <div>
          {errors.fullName && (
            <p className="mt-2 text-[#CA3F3F] text-[0.625rem]">
              {errors.fullName}
            </p>
          )}
          <div
            className={`border border-solid ${
              errors.fullName ? "border-[#CA3F3F]" : "border-[#EAF1FB]"
            } flex bg-[#EAF1FB] rounded-lg items-center text-xs p-1 px-2 lg:text-sm text-[#888888]`}
            onClick={() => inputRef2.current?.focus()}
          >
            <label
              className={`${rubikReg.className} ${
                errors.fullName ? "text-[#CA3F3F]" : "text-[#888888]"
              } text-[10.83px] md:text-[14.53px] py-1 md:py-2 px-1`}
            >
              Name <em>*</em>
            </label>
            <input
              type="text"
              name="SingleLine"
              value={fullName}
              onFocus={() =>
                sendGTMEvent({
                  event: "form_start",
                })
              }
              maxLength={255}
              ref={inputRef2}
              onChange={(event) => handleInputChange(event, "fullName")}
              className={`${rubikReg.className} text-[10.83px] md:text-[14.53px] p-1 md:p-2 rounded-lg border-none outline-none flex-1 bg-[#EAF1FB] text-[#1E1E1E]`}
            />
          </div>
        </div>
        {errors.phoneNumber && (
          <p className="mt-2 text-[#CA3F3F] text-xs">{errors.phoneNumber}</p>
        )}
        <div
          className={`border border-solid ${
            errors.phoneNumber ? "border-[#CA3F3F]" : "border-[#EAF1FB]"
          } flex bg-[#EAF1FB] rounded-lg items-center text-xs p-1 pl-2 lg:text-sm text-[#888888]`}
          onClick={() => inputRef.current?.focus()}
        >
          <label
            className={`${rubikReg.className} ${
              errors.phoneNumber ? "text-[#CA3F3F]" : "text-[#888888]"
            } text-[10.83px] md:text-[14.53px] py-1 md:py-2 px-0`}
          >
            Mobile Number<em>*</em>
          </label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            maxLength={10}
            value={phoneNumber}
            id="international_PhoneNumber_countrycode"
            ref={inputRef}
            onChange={(event) => handleInputChange(event, "phoneNumber")}
            className={`${
              errors.phoneNumber ? "text-[#CA3F3F]" : "text-[#1E1E1E]"
            } ${
              rubikReg.className
            } text-[10.83px] md:text-[14.53px] border-none outline-none p-1 md:p-2 flex-1 rounded-lg bg-[#EAF1FB] w-44`}
          />
        </div>
        {(location == "mumbai") ? 
          <>
           {errors.city && (
              <p className="mt-2 text-[#CA3F3F] text-xs">{errors.city}</p>
            )}
            <div
              className={`bg-[#EAF1FB] hidden border border-solid ${
                errors.city ? "border-[#CA3F3F]" : "border-[#EAF1FB]"
              } flex items-center text-xs p-1 px-2 lg:text-sm text-[#888888] rounded-lg`}
              onClick={() => inputRef3.current?.focus()}
            >
              <label
                className={`${rubikReg.className} ${
                  errors.city ? "text-[#CA3F3F]" : "text-[#888888]"
                } text-[10.83px] md:text-[14.53px] py-1 md:py-2 px-1`}
              >
                Select City*
              </label>
              <select
                ref={inputRef3}
                name="Dropdown1"
                value={city}
                onChange={(event) => handleInputChange(event, "city")}
                className={`${rubikReg.className} text-[#1E1E1E] text-[10.83px] md:text-[14.53px] border-none outline-none p-1 md:p-2 flex-1 rounded-lg bg-[#EAF1FB]`}
              >
                <option value="" disabled></option>
                <option value="New Delhi">New Delhi</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Noida">Noida</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Meerut">Meerut</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Mumbai" selected>Mumbai</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {errors.zone && (
                      <p className="mt-2 text-[#CA3F3F] text-xs">{errors.zone}</p>
                    )}
            <div
              className={`bg-[#EAF1FB] border border-solid ${
                errors.zone ? "border-[#CA3F3F]" : "border-[#EAF1FB]"
              } flex items-center text-xs p-1 px-2 lg:text-sm text-[#888888] rounded-lg`}
              onClick={() => inputRef3.current?.focus()}
            >
              <label
                className={`${rubikReg.className} ${
                  errors.zone ? "text-[#CA3F3F]" : "text-[#888888]"
                } text-[10.83px] md:text-[14.53px] py-1 md:py-2 px-1`}
              >
                Select Zone*
              </label>
              <select
                ref={inputRef3}
                name="Dropdown"
                value={zone}
                onChange={(event) => handleInputChange(event, "zone")}
                className={`${rubikReg.className} text-[#1E1E1E] text-[10.83px] md:text-[14.53px] border-none outline-none p-1 md:p-2 flex-1 rounded-lg bg-[#EAF1FB]`}
              >
                <option value="" disabled></option>
                <option value="Andheri">Andheri</option>
                <option value="Chembur">Chembur</option>
                <option value="Ghatkopar">Ghatkopar</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="South Mumbai">South Mumbai</option>
              </select>
            </div>
          </>
        :
        <>
         {errors.city && (
          <p className="mt-2 text-[#CA3F3F] text-xs">{errors.city}</p>
        )}
        <div
          className={`bg-[#EAF1FB] border border-solid ${
            errors.city ? "border-[#CA3F3F]" : "border-[#EAF1FB]"
          } flex items-center text-xs p-1 px-2 lg:text-sm text-[#888888] rounded-lg`}
          onClick={() => inputRef3.current?.focus()}
        >
          <label
            className={`${rubikReg.className} ${
              errors.city ? "text-[#CA3F3F]" : "text-[#888888]"
            } text-[10.83px] md:text-[14.53px] py-1 md:py-2 px-1`}
          >
            Select City*
          </label>
          <select
            ref={inputRef3}
            name="Dropdown1"
            value={city}
            onChange={(event) => handleInputChange(event, "city")}
            className={`${rubikReg.className} text-[#1E1E1E] text-[10.83px] md:text-[14.53px] border-none outline-none p-1 md:p-2 flex-1 rounded-lg bg-[#EAF1FB]`}
          >
            <option value="" disabled></option>
            <option value="New Delhi">New Delhi</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Meerut">Meerut</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Others">Others</option>
          </select>
        </div>
        </>
        
        }


       
      </div>
      <div className="flex justify-center mt-2 md:mt-4">
        {!phoneNumber || !fullName || !city || !isValid ? (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              const allFieldsEmpty = !fullName && !phoneNumber && !city;
              if (allFieldsEmpty || !fullName || !phoneNumber || !city) {
                setErrors({
                  fullName: !fullName ? "Please enter your Full Name to continue" : "",
                  phoneNumber: !phoneNumber ? "Please enter your Phone Number to continue" : "",
                  city: !city ? "Please enter your City to continue" : "",
                  zone: (!zone && location == "mumbai") ? "Please select your Zone to continue" :"",
                  common: allFieldsEmpty ? "Fill In Your Details" : "",
                });
              }
            }}
            className={`${"bg-[#DB5115]"
            } rounded-lg flex gap-2 shadow-sm mt-2 lg:mt-0 px-8 text-white font-semibold p-2`}
          >
            Consult Now
          </button>
        ) : (
          <button
            disabled={isLoading}
            //onSubmit={handleSubmit}
            onClick={handleSubmit}
            type="submit"
            className={`${ "bg-[#DB5115]"
            } rounded-lg flex gap-2 shadow-sm mt-4 md:mt-8 lg:mt-0 px-8 text-white font-semibold p-2`}
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
        )}
      </div>
    </form>
  );
};

export default Form_new;
