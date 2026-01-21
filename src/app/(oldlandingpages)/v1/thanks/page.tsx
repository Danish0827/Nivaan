import { FooterLinks } from "@/app/api/footerData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import ThankYou from "@/components/ThankYou";
import Footer from "@/sections/Footer/Footer";
import  { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={null}>
      <ThankYou />
      </Suspense>
      <Footer phoneNumber="+91-90 7005 7005" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks}/>
    </div>
  );
};

export default page;
