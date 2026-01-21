import { Suspense } from 'react';
import { Metadata } from 'next';
import AclInjury from '@/sections/AclInjury/AclInjury';

export const metadata: Metadata = {
  title: 'Best ACL Pain Doctor In Delhi NCR',
  description:
    'Get relief from ACL pain & avoid back surgery with the best doctors in Delhi NCR. Expert diagnosis and effective treatment for all types of ACL pain. Consult now for lasting solutions!',
  keywords: [
    'ACL pain treatment in Delhi NCR',
    'Best ACL pain doctor Delhi NCR',
    'Lower ACL pain specialist',
    'ACL pain relief Delhi',
    'Spine pain treatment Delhi NCR',
    'spine specialist',
    'ACL surgery',
    'spinal hospital',
  ],
};

const page = () => {
  return (
    <Suspense>
      <AclInjury pathName="/next/acl-injury" />
    </Suspense>
  );
};

export default page;
