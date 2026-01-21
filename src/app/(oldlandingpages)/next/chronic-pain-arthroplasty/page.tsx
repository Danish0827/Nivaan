import Arthroplasty from "@/components/Arthroplasty";
import { Suspense } from "react";


const page = () => {
    return (
        <div>
            <Suspense>
                <Arthroplasty/>
            </Suspense>
        </div>
    )
}

export default page