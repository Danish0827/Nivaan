import ArthroplastyMumbai from "@/components/ArthroplastyMumbai";
import { Suspense } from "react";


const page = () => {
    return (
        <div>
            <Suspense>
                <ArthroplastyMumbai/>
            </Suspense>
        </div>
    )
}

export default page