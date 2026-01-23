import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import PolicySection from '@/components/PolicySection'
import { termSections } from '@/data/termData'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions | Nivaan Care",
  description:
    "Terms and Conditions for Nivaan Care - Your trusted healthcare provider",
  alternates: {
    canonical: "https://www.nivaancare.com/terms-and-conditions",
  },
};

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
