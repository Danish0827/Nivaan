import React, { Suspense } from "react";
import KneepainwomenJaipur from "@/components/KneepainwomenJaipur";

const page = () => {
  return (
    <div>
      <Suspense>
        <KneepainwomenJaipur pathName="/v1/jaipur/knee-pain-women-new" imgStyle="absolute bottom-0 -right-2 translate-y-14 lg:hidden translate-x-6 h-40 w-36" />
      </Suspense>
    </div>
  );
};

export default page;