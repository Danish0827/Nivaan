import { LandingHeroSection } from '@/components/LandingHeroSection'
import LandingFooter from '@/components/LandingPages/LandingFooter'
import LandingHeader from '@/components/LandingPages/LandingHeader'
import NivaanSteps from '@/components/LandingPages/NivaanSteps'
import { getLandingPage } from '@/lib/api'
import "@/app/style/site.css"
import LandingStatsBar from '@/components/LandingPages/LandingStatsBar'
import LandingReviews from '@/components/LandingPages/LandingReviews'

const landingpages = async ({ params }: any) => {
    const paramsData = await params
    const slug = paramsData.slug
    const res = await getLandingPage(slug)
    return (
        <>
            <LandingHeader menu={res.acf.head_menus} location={res.acf.location_name} appointment={res.acf.head_button_name} />
            <LandingHeroSection
                title={res.acf?.banner_title}
                description={res.acf?.banner_designation}
                button={res.acf?.banner_button_name}
                clinic={res.acf?.clinics_boxs}
            />
            <LandingStatsBar stats={res.acf.banner_numbers} />
            <NivaanSteps
                step_title={res.acf.step_title}
                step_designation={res.acf.step_designation}
                step_image={res.acf.step_image}
                steps={res.acf.steps}
                step_button_name={res.acf.step_button_name}
            />
            <LandingReviews data={res.acf.patients_lists} />
            <LandingFooter />
        </>
    )
}

export default landingpages