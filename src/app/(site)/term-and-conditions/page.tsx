import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import PolicySection from '@/components/PolicySection'
import { termSections } from '@/data/termData'
import React from 'react'

const page = () => {
  return (
    <>
      <PageBreadcrumb title="Terms & Conditions" />
      <div className="pb-10">
        {termSections.map((section) => (
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
