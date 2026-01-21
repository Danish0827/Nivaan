import { Review } from '@/app/api/allTypes'
import { montserratSemiBold } from '@/app/fonts'
import ReviewTxtCard from '@/components/ReviewTxtCard'
import React from 'react'

const ReviewSection = ({ requestAppointmentReviewData , title }: { requestAppointmentReviewData: Review[], title?: string }) => {
  return (
    <div className='flex flex-col items-center py-6 md:mb-12'>
        <h1 className={`${montserratSemiBold.className} text-[#264494] text-center text-xl md:text-4xl mb-8`}>{title || 'Reviews'}</h1>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
            {
                requestAppointmentReviewData.map(rev => <ReviewTxtCard key={rev.id} reviewData={rev}  />)
            }
        </div>
    </div>
  )
}

export default ReviewSection