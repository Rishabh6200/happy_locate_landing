import BlogSection from '@/components/home/BlogSection'
import HomeFAQ from '@/components/home/HomeFAQ'
import RelocationSection from '@/components/home/RelocationSection'
import TestimonialCarousel from '@/components/home/Testimonial'
import ServiceHeader from '@/components/services-pages/ServiceHeader'
import CountriesGrid from '@/components/services/CountriesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import MidAboutServices from '@/components/services/MidAboutServices'
import ServiceHeroSection from '@/components/services/ServiceHeroSection'
import ServicesOffered from '@/components/services/ServicesOffered'
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
         <ServiceHeroSection />
         <HowItWorks />
         <ServicesOffered
            heading="Top Pet Relocation Services Offered By Us"
            buttonText="Book Now"
            services={[
               { title: 'Vaccination certificate', icon: '/images/service-box.svg' },
               { title: 'Titer Test', icon: '/images/service-box.svg' },
               { title: 'Export NOC', icon: '/images/service-box.svg' },
               { title: 'Microchipping', icon: '/images/service-box.svg' },
               { title: 'Import Clearance', icon: '/images/service-box.svg' },
            ]}
         />

         <CountriesGrid />
         <MidAboutServices />
         <ServicesOffered
            heading="Documents For Pet Relocation"
            buttonText="Book Now"
            services={[
               { title: 'Domestic Pet Relocation', icon: '/images/service-box.svg' },
               { title: 'International Pet Relocation', icon: '/images/service-box.svg' },
               { title: 'Doorstep Pick & Drop', icon: '/images/service-box.svg' },
            ]}
         />


         <HomeFAQ />
         <TestimonialCarousel />
         <BlogSection />
         <RelocationSection />
      </>
   )
}

export default Page