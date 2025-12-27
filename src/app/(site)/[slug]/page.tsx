import { TreatmentHeroSection } from '@/components/TreatmentHeroSection'
import TreatmentSection from '@/components/Treatments/TreatmentSection';
import TreatmentStatsBar from '@/components/TreatmentStatsBar';
import React from 'react'

const treatmentpage = async ({params}:any) => {
    const slug = params.slug
    const res = await fetch(
        `https://www.hclient.in/nivaan/wp-json/site/v1/treatments/${slug}`,
        {
            next: { revalidate: 60 }, // IMPORTANT
        }
    );

    if (!res.ok) {
        console.error("API failed", res.status);
        return null;
    }

    let data;
    try {
        data = await res.json();
    } catch (err) {
        console.error("JSON parse failed");
        return null;
    }

    const { acf } = data
    return (
        <>
            <TreatmentHeroSection
                breadcrumbTitle={acf?.treatment_types}
                breadcrumbSub={data.title}
                title={acf?.banner_title}
                description={acf?.banner_description}
                button={acf?.banner_button_name}
                image={data?.featured_image}
            />
            <TreatmentStatsBar stats={acf?.banner_numbers} />
            <TreatmentSection data={acf}/>
        </>
    )
}

export default treatmentpage