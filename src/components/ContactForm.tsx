import { MdKeyboardArrowDown } from "react-icons/md";
import parse from "html-react-parser";

const ContactForm = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#1FA2D8] to-[#0B5FA5] p-8 text-white">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="text-center text-base lg:text-lg font-thin mt-2 opacity-90">
        {parse(description)}
      </div>

      <form
        action="https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm2/formperma/XBy9lPuUYW-iiX-2yyXoXGpTLy3Yn4PLb8GjCBllefc/htmlRecords/submit"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        className="mt-6 space-y-4"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="SingleLine"
            required
            placeholder="First Name *"
            className="mb-2 w-full rounded-full bg-white px-6 py-4 outline-none text-black text-base"
          />
          <input
            type="text"
            name="SingleLine_LastName"
            placeholder="Last Name"
            className="mb-2 w-full rounded-full bg-white px-6 py-4 outline-none text-black text-base"
          />
          <input
            type="number"
            name="PhoneNumber_countrycode"
            required
            maxLength={10}
            placeholder="Mobile Number *"
            className="mb-2 w-full rounded-full bg-white px-6 py-4 outline-none text-black text-base"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            className="mb-2 w-full rounded-full bg-white px-6 py-4 outline-none text-black text-base"
          />
        </div>
        <div className="relative w-full">
          <select
            name="Dropdown2"
            required
            className="mb-2 w-full appearance-none rounded-full bg-white px-6 py-4 pr-12 outline-none text-black text-base"
          >
            <option value="">Select Pain Area *</option>
            <option value="Back Pain">Back Pain</option>
            <option value="Neck Pain">Neck Pain</option>
            <option value="Shoulder Pain">Shoulder Pain</option>
            <option value="Knee Pain">Knee Pain</option>
            <option value="Other Pain">Other Pain</option>
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
            <MdKeyboardArrowDown className="text-2xl text-black" />
          </span>
        </div>
        <textarea
          placeholder="Enter Message"
          name="MultiLine"
          rows={4}
          className="mb-2 w-full rounded-3xl bg-white px-6 py-4 outline-none text-black text-base"
        ></textarea>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#EC6724] to-[#F05432] hover:opacity-90 px-8 py-3 rounded-full font-semibold"
          >
            REQUEST CALLBACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
