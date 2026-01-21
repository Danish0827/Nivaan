import OsteoarthritisMumbai from "@/components/OsteoarthritisMumbai";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <OsteoarthritisMumbai />
      </Suspense>
    </div>
  );
};

export default page;
