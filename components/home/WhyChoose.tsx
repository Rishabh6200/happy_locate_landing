import { Container, Typography } from '@mui/material'
import React from 'react'
import ServiceHead from './heading/ServiceHead'

const benefits = [
   {
      title: 'Journey Updates & Support Assistance',
      description:
         'Stay updated at every step with real-time journey tracking and a structured ticket-based resolution system, ensuring responses within 72 hours.',
   },
   {
      title: 'All-in-One Relocation Platform',
      description:
         'Access 8+ Relocation Services across 50+ countries, offering a seamless and convenient moving experience under one platform.',
   },
   {
      title: 'Trusted by Families & Corporates Worldwide',
      description:
         'Join 1.5 lakh+ families and 150+ corporate clients who rely on our expert-driven relocation services for a smooth and secure move.',
   },
   {
      title: 'Technology-Enabled, Hassle-Free Relocation',
      description:
         'Our advanced, Tech-Driven processes streamline Relocations, ensuring efficiency, transparency, and a stress-free experience.',
   },
]

const WhyChoose = () => {
   return (
      <section
         className="bg-black py-10 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: 'url(/images/BG-dark.png)' }}
      >
         <Container>
            <ServiceHead className="text-white" heading="Why Choose" specialHeading="HappyLocate?" />

            <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
               {/* Left Image */}
               <div className="flex justify-center items-center col-span-1">
                  <img
                     src="/images/whyChoose-image.png"
                     alt="Pet Carrier and Luggage"
                     className="rounded-xl max-w-full h-auto object-cover"
                  />
               </div>

               {/* Benefits List */}
               <div className="space-y-10 col-span-1">
                  {benefits.map((benefit, index) => (
                     <div key={index} className="flex items-start gap-4">
                        <div className="flex items-center justify-center text-center mt-4">
                           <span className='w-8 h-8 border border-white rounded-full text-black bg-white font-bold flex items-center justify-center'>
                              {index + 1}
                           </span>
                        </div>
                        <div>
                           <Typography variant="body1" className="!text-white !font-semibold mb-1">
                              {benefit.title}
                           </Typography>
                           <Typography variant="body2" className="!text-gray-300">
                              {benefit.description}
                           </Typography>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   )
}

export default WhyChoose
