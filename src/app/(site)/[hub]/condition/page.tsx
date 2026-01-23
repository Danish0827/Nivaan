import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { getCondition } from '@/lib/api';

const page = async ({ params }: any) => {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  const data = await getCondition(hub);
  return (
    <>
      <PageBreadcrumb title={"Condition"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
        <LocationGrid posts={data} url="condition" cat={hub} />
      </div>
    </>
  )
}

export default page