import BlogSection from '@/components/home/BlogSection'
import HomeFAQ from '@/components/home/HomeFAQ'
import RelocationSection from '@/components/home/RelocationSection'
import TestimonialCarousel from '@/components/home/Testimonial'
import ServiceHeader from '@/components/services-pages/ServiceHeader'
import React, { FC } from 'react'

interface PageProps {
   params: Promise<{
      id: string
   }>
}

const Page: FC<PageProps> = ({ params }) => {
   return (
      <>
         <ServiceHeader
            title='Pet Relocation'
            subTitle='Worldwide Pet Relocation Services'
         />
         <div className="h-[70vh]"></div>
         <HomeFAQ />
         <TestimonialCarousel />
         <BlogSection />
         <RelocationSection />
      </>
   )
}

export default Page