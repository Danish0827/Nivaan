import BackPainEdw from "@/sections/BackPainEDW/BackPainEdw";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <BackPainEdw pathName='/v1/back-pain-elderly-women-new' />
    </Suspense>
  );
};

export default page;
