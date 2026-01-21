import { FeatureListSectionProps } from "@/app/api/allTypes"
import FeatureListCard from "@/components/FeatureListCard"

const FeatureListSection = ({featureContents}: FeatureListSectionProps) => {
    return (
        <div className='flex flex-col items-center gap-8 my-10 md:flex-row md:justify-center md:my-20'>
            {featureContents.map((feature, i) => (
                <FeatureListCard key={i} title={feature.title} data={feature.data} />
            ))}
        </div>
    )
}

export default FeatureListSection