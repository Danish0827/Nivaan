import { TreatmentHeroSection } from '@/components/TreatmentHeroSection'
import TreatmentSection from '@/components/Treatments/TreatmentSection';
import TreatmentStatsBar from '@/components/TreatmentStatsBar';
import { getSingleTreatment } from '@/lib/api';
import { notFound } from 'next/navigation';
import React from 'react'

const treatmentpage = async ({params}:any) => {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleTreatment(slug)
    const apiHubSlug = data?.acf?.treatment_types?.slug;    
    if (!apiHubSlug || apiHubSlug !== hub) {
        notFound();
    }
    const { acf } = data
    return (
        <>
            <TreatmentHeroSection
                breadcrumbTitle={acf?.treatment_types}
                breadcrumbSub={data?.title}
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