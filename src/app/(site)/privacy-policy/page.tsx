import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import PolicySection from '@/components/PolicySection'
import { privacyPolicySections } from '@/data/privacyPolicyData'
import React from 'react'

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
