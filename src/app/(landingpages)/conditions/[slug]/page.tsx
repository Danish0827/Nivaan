import LandingFooter from '@/components/LandingPages/LandingFooter'
import LandingHeader from '@/components/LandingPages/LandingHeader'
import { getLandingPage } from '@/lib/api'
import React from 'react'

const landingpages = async ({ params }: any) => {
    const paramsData = await params
    const slug = paramsData.slug
    const res = await getLandingPage(slug)
    return (
        <>
            <LandingHeader menu={res.acf.head_menus} location={res.acf.location_name} appointment={res.acf.head_button_name} />
            <LandingFooter />
        </>
    )
}

export default landingpages