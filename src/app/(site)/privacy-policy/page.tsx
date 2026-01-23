import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import PolicySection from '@/components/PolicySection'
import { privacyPolicySections } from '@/data/privacyPolicyData'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Privacy Policy | Nivaan Care",
  description:
    "Privacy Policy for Nivaan Care - Your trusted healthcare provider",
  alternates: {
    canonical: "https://www.nivaancare.com/privacy-policy",
  },
};
const page = () => {
  return (
    <>
      <PageBreadcrumb title="Privacy Policy" />
      <div className="pb-10">
        {privacyPolicySections.map((section) => (
          <PolicySection
            key={section.number}
            number={section.number}
            heading={section.heading}
            intro={section.intro}
            items={section.items}
          />
        ))}
      </div>
    </>
  )
}

export default page
