import React from "react";
import FeatureListCard from "@/components/FeatureListCard";
import { FeatureListCardDataType } from "@/app/api/allTypes";

const FeatureListCardSection = ({
  title1,
  title2,
  data1,
  data2,
  pathname
}: {
  title1?: string | React.ReactNode;
  title2?: string | React.ReactNode;
  data1: FeatureListCardDataType[];
  data2: FeatureListCardDataType[];
  pathname?: string;
}) => {
  return (
    <div className={`flex flex-col items-center md:flex-row md:justify-center gap-8 mb-10 ${pathname==="osteo" ? "md:mt-28 mt-8" : "mt-8"}`}>
      <FeatureListCard title={title1} data={data1} />
      <FeatureListCard title={title2} data={data2} />
    </div>
  );
};
export default FeatureListCardSection;
