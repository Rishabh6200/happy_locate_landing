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
         </Container>

         <div className="text-white py-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-7 items-center">
            {/* Left Image */}
            <div className="flex justify-center col-span-3">
               <img
                  src="/images/whyChoose-image.png"
                  alt="Pet Carrier and Luggage"
                  className="rounded-xl w-full max-w-md object-cover"
               />
            </div>

            {/* Benefits List */}
            <div className="space-y-10 col-span-2">
               {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                     <div className="flex items-center justify-center text-center mt-4">
                        <span className='w-8 h-8 border border-white rounded-full text-black bg-white font-bold' >
                           {index + 1}
                        </span>
                     </div>
                     <div>
                        <Typography variant="h6" className="!text-white !font-semibold mb-1">
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
      </section>
   )
}

export default WhyChoose
