import ConditionSection from '@/components/Condition/ConditionSection';
import { ConditionHeroSection } from '@/components/ConditionHeroSection';
import ConditionStatsBar from '@/components/ConditionStatsBar';
import { getSingleCondition } from '@/lib/api';
import { notFound } from 'next/navigation';
import React from 'react'

const conditionpage = async ({ params }: any) => {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleCondition(slug)
    const apiHubSlug = data?.acf?.condition_type?.[0]?.slug;
    if (!apiHubSlug || apiHubSlug !== hub) {
        notFound();
    }
    const { acf } = data
    return (
        <>
            <ConditionHeroSection
                breadcrumbTitle={acf?.condition_type[0]}
                breadcrumbSub={data?.title}
                title={acf?.banner_title}
                description={acf?.banner_description}
                button={acf?.banner_button_name}
                image={data?.featured_image}
            />
            {!acf?.banner_boxs == false &&
                <ConditionStatsBar stats={acf?.banner_boxs} />}
            <ConditionSection data={acf} />
        </>
    )
}

export default conditionpage