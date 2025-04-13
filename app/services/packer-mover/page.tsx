import ServiceHeader from '@/components/services/ServiceHeader'
import HowItWorks from '@/components/services/HowItWorks'
import HeroSection from '@/components/services/PackersMoving/HeroSection'
import WhyChooseUs from '@/components/services/PackersMoving/WhyChooseUs'
import React from 'react'
import ServicesOffered from '@/components/services/ServicesOffered'
import FAQ from '@/components/common/FAQ'
import TestimonialCarousel from '@/components/home/Testimonial'
import BlogSection from '@/components/home/BlogSection'
import RelocationSection from '@/components/home/RelocationSection'

const Page = () => {
   return (
      <>
         <ServiceHeader
            title='Packers & Moving'
            breadcrumb='Packers & Moving'
            isImage={false}
         />
         <HeroSection />
         <WhyChooseUs />
         <HowItWorks
            data={{
               heading: "We provide Effortless\nRelocation, Guaranteed",
               chipLabel: "How its Work",
               imageUrl: "/images/relocation-worker.svg",
               imageAlt: "Relocation worker with HappyLocate uniform",
               steps: [
                  {
                     title: 'Enter Relocation Details',
                  },
                  {
                     title: 'Select Inventory',
                  },
                  {
                     title: 'Choose Packer & Movers',
                  },
                  {
                     title: 'Receive and compare quote',
                  },
                  {
                     title: 'Make the payment online',
                  },
               ]
            }}
         />
         <ServicesOffered
            heading="Top Packers & Movers Services in Bangalore"
            buttonText="Get a Free Quote"
            services={[
               {
                  title: 'House Shifting',
                  desc: 'Safe and seamless moving for apartments, villas, and independent homes.',
                  icon: '/images/service-box.svg',
               },
               {
                  title: 'Office Relocation',
                  desc: 'Efficient business moves to minimize downtime.',
                  icon: '/images/service-box.svg',
               },
               {
                  title: 'Vehicle Shifting',
                  desc: 'Secure car and bike transport services across India. Asset Delivery - Ensuring your valuables reach their destination safely and on time.',
                  icon: '/images/service-box.svg',
               },
               {
                  title: 'Vehicle Shifting',
                  desc: 'International Relocations',
                  icon: '/images/service-box.svg',
               },
            ]}
         />

         <FAQ faqs={[
            {
               question: 'Do you offer insurance for household items?',
               answer: 'Yes, we offer transit insurance to safeguard your belongings against unforeseen events like damage, theft, or accidents during the move.',
            },
            {
               question: 'Will you help with unpacking and setting up at the new location?',
               answer: 'Absolutely! Our team provides end-to-end services including unpacking, furniture assembly, and setup at your new home upon request.',
            },
            {
               question: 'What if my new location is not ready on the same day?',
               answer: 'We provide short-term warehousing and safe storage options, so you don’t have to worry about delays in shifting or possession dates.',
            },
            {
               question: 'Are packing materials included in the charges?',
               answer: 'Yes, we use high-quality, industry-grade packing materials, and the cost is either included in the overall package or shared transparently upfront.',
            },
            {
               question: 'What if some of my items are damaged during transit?',
               answer: 'In the unlikely event of damage, we offer insurance claims assistance and ensure resolution as per the insured value and damage report.',
            }
         ]}
         />

         <TestimonialCarousel
            testimonials={[
               {
                  "id": 1,
                  "name": "Thammaiah Aiyappa",
                  "designation": "",
                  "image": "/images/testimonial-man.svg",
                  "description": "I used HappyLocate when I moved houses within Bangalore. They allocate each person a POC from the company who liases with the moving partner. The team arrived on time, packed all my things properly (cling wrap for breakables & blankets for heavy stuff) and moved and unpacked all my things with care. The team was super communicative and had constant updates. The on ground team was super careful and helpful. They even moved a few extra items that were not in the original list."
               },
               {
                  "id": 2,
                  "name": "Tushar Bhanushali",
                  "designation": "",
                  "image": "/images/testimonial-man.svg",
                  "description": "Awesome service from HappyLocate when I moved to my new home in Bangalore! The entire process was smooth and well-coordinated—from packing to delivery. The team was super professional, punctual, and handled my belongings with great care. It really took the stress out of moving. I'm so glad I chose HappyLocate and would definitely recommend them to anyone planning a move!"
               },
               {
                  "id": 3,
                  "name": "Dinesh Kumar",
                  "designation": "",
                  "image": "/images/testimonial-man.svg",
                  "description": "Awesome service from HappyLocate when I moved to my new home in Bangalore! The entire process was smooth and well-coordinated—from packing to delivery. The team was super professional, punctual, and handled my belongings with great care. It really took the stress out of moving. I'm so glad I chose HappyLocate and would definitely recommend them to anyone planning a move!"
               },
               {
                  "id": 4,
                  "name": "Kartikey Ranjan",
                  "designation": "",
                  "image": "/images/testimonial-man.svg",
                  "description": "Very good service, I got my goods shifted from Delhi to Bengaluru. There were 80 items and all items were delivered and installed without any damage. It seemed like I shifted from one society to another in same city. Thank you Happylocate for an awesome service."
               }
            ]}
         />
         <BlogSection />
         <RelocationSection
            descriptionParagraphs={[
               "Relocating can be overwhelming, but not with HappyLocate! Whether you’re moving your home, office, or even your pet, we provide seamless, reliable, and affordable relocation services tailored to your needs. With our expertise and commitment to excellence, we make moving hassle-free and stress-free for customers across India. At HappyLocate, we understand that every move is unique, and so are your requirements. That’s why we offer customized relocation solutions designed to suit your timeline, budget, and specific preferences. From carefully packing your belongings to ensuring their safe delivery, we handle every step with precision and care. What sets us apart is our dedication to transparency and trust. With clear pricing, no hidden costs, and real-time tracking, you stay informed and in control throughout the entire relocation process. Whether it’s a local move or an interstate shift, we’ve got you covered with our extensive network and professional team.",
               "Our team of skilled professionals is trained to handle even the most delicate or complex relocations with ease. From valuable antiques to sensitive office equipment, we ensure everything arrives at its destination in perfect condition. For pet lovers, our specialized pet relocation services ensure your furry friends travel comfortably and safely. With HappyLocate, you don’t just relocate; you start a new chapter without the stress of moving. Let us take care of the details while you focus on what matters most. Whether it’s your first move or your tenth, we guarantee a smooth, efficient, and happy moving experience every time.",
            ]}
            locations={[
               "Packers & Movers Bangalore", "Packers & Movers Bangalore", "Packers & Movers Bangalore", "Packers & Movers Bangalore",
               "Packers & Movers Delhi", "Packers & Movers Delhi", "Packers & Movers Delhi", "Packers & Movers Delhi",
               "Packers & Movers Hyderabad", "Packers & Movers Hyderabad", "Packers & Movers Hyderabad", "Packers & Movers Hyderabad",
               "Packers & Movers Mumbai", "Packers & Movers Mumbai", "Packers & Movers Mumbai", "Packers & Movers Mumbai",
               "Packers & Movers Pune", "Packers & Movers Pune", "Packers & Movers Pune", "Packers & Movers Pune",
               "Packers & Movers Chennai", "Packers & Movers Chennai", "Packers & Movers Chennai", "Packers & Movers Chennai",
               "Packers & Movers Kolkata", "Packers & Movers Kolkata", "Packers & Movers Kolkata", "Packers & Movers Kolkata",
               "Packers & Movers Ahmedabad", "Packers & Movers Ahmedabad", "Packers & Movers Ahmedabad", "Packers & Movers Ahmedabad",
            ]}
         />
      </>
   )
}

export default Page