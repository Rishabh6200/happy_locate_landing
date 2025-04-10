import React from 'react'
import CarAboutSection from '@/components/services/Car-About-Services'
import HowItWorks from '@/components/services/HowItWorks'
import StatsSection from '@/components/services/PackersMoving/StatsSection'
import ServiceHeader from '@/components/services/ServiceHeader'
import ServiceHeroSection from '@/components/services/ServiceHeroSection'
import ServicesOffered from '@/components/services/ServicesOffered'
import FAQ from '@/components/common/FAQ'
import RelocationSection from '@/components/home/RelocationSection'
import BlogSection from '@/components/home/BlogSection'
import TestimonialCarousel from '@/components/home/Testimonial'

const Page = () => {
   return (
      <>
         <ServiceHeader
            breadcrumb='Vehicle Shifting'
            title='Car Shifting By HappyLocate'
            isImage={false}
         />
         <ServiceHeroSection
            data={{
               tagline: "About Service",
               headline: "Car Relocation Services Made Easy",
               description: "Safe, Hassle-Free Car Transport Across Cities in India",
               content:
                  "Moving your car from one city to another? Let HappyLocate handle it with precision, care, and complete peace of mind. From sedans to SUVs, we ensure smooth and damage-free delivery with live tracking, enclosed carriers, and a dedicated relocation manager at your service.",
               cta: {
                  text: "Get a Free Quote",
                  link: "#",
               },
               image: "/images/car_shiping.svg",
            }}
         />
         <StatsSection
            stats={[
               {
                  "label": "Best rate in the industry",
                  "value": "4.5"
               },
               {
                  "label": "Insurance Available",
                  "value": "72hr"
               },
               {
                  "label": "Pin codes served",
                  "value": "15000+"
               },
               {
                  "label": "Transparent Pricing",
                  "value": "24x7"
               }
            ]}
         />
         <HowItWorks
            data={{
               "heading": "We provide Effortless Relocation, Guaranteed",
               "chipLabel": "How It Works",
               "steps": [
                  {
                     "title": "Share Your Relocation Details",
                     "desc": "Let us know your car model, pickup & drop city, and preferred move date."
                  },
                  {
                     "title": "Get a Free Instant Quote",
                     "desc": "We'll match you with our verified car relocation partner in your area."
                  },
                  {
                     "title": "Book Your Move",
                     "desc": "Select your slot. Our team coordinates everything from here."
                  },
                  {
                     "title": "Sit Back & Relax",
                     "desc": "Stay updated with your car location and receive it safely at your new destination."
                  }
               ],
               "imageUrl": "/images/relocation-worker.svg",
               "imageAlt": "Volvo XC90 being loaded onto a car carrier truck"
            }}
         />

         <CarAboutSection />
         <ServicesOffered
            buttonText="Get a Free Quote"
            heading="Services Offered By Top Packers And Movers In Bangalore"
            services={[
               {
                  "title": "House Shifting",
                  "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Office Shifting",
                  "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Asset Delivery",
                  "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                  "icon": "/images/service-box.svg"
               }
            ]}
         />

         <FAQ
            faqs={[
               {
                  "question": "How do I book your relocation services?",
                  "answer": "You can typically book our relocation services by getting a free instant quote through our website or by contacting us directly via phone. You'll need to provide details such as your origin, destination, preferred moving date, and a list of items to be moved. Once you receive the quote and are satisfied, you can confirm your booking."
               },
               {
                  "question": "How can I ensure my items are safe during the move?",
                  "answer": "Our professional team uses high-quality packing materials and secure handling techniques to ensure your items are protected. We recommend packing fragile items with extra care using bubble wrap and packing paper, and clearly labeling all boxes, especially those containing delicate items. You can also consider full-value protection insurance for added peace of mind.",
               },
               {
                  "question": "Do you provide real-time tracking for my move?",
                  "answer": "Yes, we provide real-time tracking for your move. Once your belongings are in transit, you will receive updates on their location, allowing you to stay informed throughout the relocation process. This provides added security and helps you plan for the arrival at your new destination."
               },
               {
                  "question": "Are there any hidden charges?",
                  "answer": "We pride ourselves on transparency and aim to provide a clear and comprehensive quote upfront. However, some factors can influence the final cost, such as additional services requested (e.g., appliance installation, furniture assembly), changes in inventory, or unforeseen difficulties at the origin or destination (e.g., long carry distances, stairs). We will always communicate any potential additional charges to you beforehand for your approval.",
               },
               {
                  "question": "Do you provide insurance for my belongings?",
                  "answer": "Yes, we offer different insurance options to cover your belongings during the relocation. We typically provide a basic carrier liability, but you can also opt for full-value protection for more comprehensive coverage. We recommend discussing the various insurance plans with our representatives to choose the one that best suits your needs and the value of your items.",
               },
               {
                  "question": "What types of relocation services do you offer?",
                  "answer": "We offer a comprehensive range of relocation services, including residential and commercial moves, local and long-distance relocations (within the country and internationally), packing and unpacking services, furniture disassembly and reassembly, vehicle transportation, storage solutions, and specialized handling for delicate or high-value items."
               },
               {
                  "question": "How far in advance should I book my move?",
                  "answer": "It's generally recommended to book your move at least 4-8 weeks in advance, especially if you are moving during peak season (summer months) or on a weekend. For long-distance or international moves, booking 2-3 months in advance is advisable to ensure availability and allow ample time for planning. However, we will always do our best to accommodate your needs, even for last-minute moves, depending on our schedule."
               }
            ]}
         />

         <TestimonialCarousel />
         <BlogSection />

         <RelocationSection
            descriptionParagraphs={[
               "Relocating can be overwhelming, but not with HappyLocate! Whether you’re moving your home, office, or even your pet, we provide seamless, reliable, and affordable relocation services tailored to your needs. With our expertise and commitment to excellence, we make moving hassle-free and stress-free for customers across India. At HappyLocate, we understand that every move is unique, and so are your requirements. That’s why we offer customized relocation solutions designed to suit your timeline, budget, and specific preferences. From carefully packing your belongings to ensuring their safe delivery, we handle every step with precision and care. What sets us apart is our dedication to transparency and trust. With clear pricing, no hidden costs, and real-time tracking, you stay informed and in control throughout the entire relocation process. Whether it’s a local move or an interstate shift, we’ve got you covered with our extensive network and professional team.",
               "Our team of skilled professionals is trained to handle even the most delicate or complex relocations with ease. From valuable antiques to sensitive office equipment, we ensure everything arrives at its destination in perfect condition. For pet lovers, our specialized pet relocation services ensure your furry friends travel comfortably and safely. With HappyLocate, you don’t just relocate; you start a new chapter without the stress of moving. Let us take care of the details while you focus on what matters most. Whether it’s your first move or your tenth, we guarantee a smooth, efficient, and happy moving experience every time."
            ]}
            locations={[
               "Packer & Mover Mumbai", "Packer & Mover Mumbai", "Packer & Mover Mumbai", "Packer & Mover Mumbai",
               "Packer & Mover Delhi", "Packer & Mover Delhi", "Packer & Mover Delhi", "Packer & Mover Delhi",
               "Packer & Mover Gurugram", "Packer & Mover Gurugram", "Packer & Mover Gurugram", "Packer & Mover Gurugram",
               "Packer & Mover Ahmedabad", "Packer & Mover Ahmedabad", "Packer & Mover Ahmedabad", "Packer & Mover Ahmedabad",
            ]}
         />
      </>
   )
}

export default Page