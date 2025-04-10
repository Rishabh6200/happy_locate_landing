import BlogSection from '@/components/home/BlogSection'
import RelocationSection from '@/components/home/RelocationSection'
import TestimonialCarousel from '@/components/home/Testimonial'
import ServiceHeader from '@/components/services/ServiceHeader'
import CountriesGrid from '@/components/services/CountriesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import MidAboutServices from '@/components/services/MidAboutServices'
import ServiceHeroSection from '@/components/services/ServiceHeroSection'
import ServicesOffered from '@/components/services/ServicesOffered'
import React, { FC } from 'react'
import FAQ from '@/components/common/FAQ'

const faqs = [
   {
      question: 'How do I book your relocation services?',
      answer: 'You can book our relocation services online through our website or by contacting our customer support team for assistance.',
   },
   {
      question: 'How can I ensure my items are safe during the move?',
      answer: 'Our professional team uses high-quality packing materials and secure handling to ensure your items are protected.',
   },
   {
      question: 'Do you provide real-time tracking for my move?',
      answer: 'Yes, we provide real-time tracking so you can monitor the status and location of your belongings throughout the move.',
   },
   {
      question: 'Are there any hidden charges?',
      answer: 'No, we maintain complete transparency. All charges will be clearly communicated to you before the move begins.',
   },
   {
      question: 'Do you provide insurance for my belongings?',
      answer: 'Yes, we offer comprehensive insurance options to ensure your belongings are protected against any unforeseen circumstances.',
   },
   {
      question: 'What types of relocation services do you offer?',
      answer: 'We offer a wide range of services including home shifting, office relocation, vehicle transportation, and pet relocation.',
   },
   {
      question: 'How far in advance should I book my move?',
      answer: 'It’s recommended to book at least 7–10 days in advance to ensure availability and proper planning.',
   },
];


const Page: FC = () => {
   return (
      <>
         <ServiceHeader
            title='Pet Relocation'
            breadcrumb='Worldwide Pet Relocation Services'
         />
         <ServiceHeroSection
            data={{
               "tagline": "About Service",
               "headline": "Moving Abroad? Take Your Furry Friend Along – Stress-Free!",
               "description": "Relocating to a new country is exciting, but ensuring your pet’s safety and comfortable journey can be challenging. At HappyLocate, we make International Pet Relocation stress-free, safe, and seamless, so you can focus on your new adventure while we handle the logistics.",
               "content": "Every year, over 350+ pets travel internationally with us, reaching destinations like the USA, UK, Canada, Australia, UAE, and Europe. With a 98% successful Relocation rate, our team of experts ensures that every detail is covered – From Airline-approved pet Travel crates and customs clearance to Veterinary requirements and Quarantine protocols. We partner with global airlines and pet-friendly services to provide the most comfortable and secure experience for your beloved companion.",
               "cta": {
                  "text": "Get a Free Quote",
                  "link": "/get-quote"
               },
               "image": "/images/service-hero-banner.svg"
            }}
         />
         <HowItWorks
            data={{
               heading: "We provide Effortless\nRelocation, Guaranteed",
               chipLabel: "How its Work",
               steps: [
                  {
                     title: 'Fill-in Pet Details',
                     desc: "Fill in your pet's details, vaccination history, travel details.",
                  },
                  {
                     title: 'Get a Free Moving Quote',
                     desc: 'Get a quote from our authorised channel partner',
                  },
                  {
                     title: 'Schedule Your Pet Move',
                     desc: 'We work with you to pick the best possible date',
                  },
                  {
                     title: 'We got you Handled',
                     desc: 'Sit back and relax, let us handle your pet’s relocation',
                  },
               ],
               imageUrl: "/images/cat-img.svg"
            }}
         />
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


         <FAQ faqs={faqs} />
         <TestimonialCarousel />
         <BlogSection />
         <RelocationSection
            descriptionParagraphs={[
               "Moving can be a challenge, but with HappyLocate, it’s a seamless journey. Whether you're relocating your home, office, or pet, we provide end-to-end solutions designed for convenience, reliability, and peace of mind. Our expertise ensures a hassle-free experience, with customized services tailored to your specific needs.",
               "From secure packing to safe transportation, we handle every detail with precision. Our commitment to transparency means no hidden costs, Journey tracking, and dedicated support at every stage. Whether you're shifting within the city, across states, or internationally, our extensive network and skilled professionals ensure a smooth transition.",
               "For Pet parents, we offer specialized relocation services that prioritize safety and comfort, so your furry companions travel stress-free. Businesses can rely on us for efficient office moves, minimizing downtime and ensuring a swift setup. With HappyLocate, relocation is more than just a move, it’s a seamless transition to your next chapter. Trust us to handle the details while you enjoy a hassle-free experience.",
            ]}
            locations={[
               "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
               "Relocation Delhi", "Relocation Chennai", "Relocation Hyderabad", "Relocation Kolkata",
               "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
               "Relocation Delhi", "Relocation Chennai", "Relocation Hyderabad", "Relocation Kolkata",
               "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
               "Relocation Delhi", "Relocation Chennai", "Relocation Hyderabad", "Relocation Kolkata",
               "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
               "Relocation Delhi", "Relocation Chennai", "Relocation Hyderabad", "Relocation Kolkata",
               "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
               "Relocation Delhi", "Relocation Chennai", "Relocation Hyderabad", "Relocation Kolkata",
            ]}
         />
      </>
   )
}

export default Page