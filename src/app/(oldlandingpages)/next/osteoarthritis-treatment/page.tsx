import OsteoarthritisTreatment from "@/components/OsteoarthritisTreatment";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <OsteoarthritisTreatment />
      </Suspense>
    </div>
  );
};

export default page;
