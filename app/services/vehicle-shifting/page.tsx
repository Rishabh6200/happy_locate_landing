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
import Testimonial from '@/components/common/Testimonial'

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
                  "label": "Google Rating",
                  "value": "4.5"
               },
               {
                  "label": "Pin codes served",
                  "value": "15000+"
               },
               {
                  "label": "Damage Resolution Guarantee",
                  "value": "72hr"
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
            heading="Things to Consider When Hiring Car Shifting Services"
            services={[
               {
                  "title": "Service Availability & Coverage",
                  "desc": "Check if the provider operates in both your pickup and drop-off locations. Nationwide coverage ensures better service and fewer delays.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Proper Documentation & Permits",
                  "desc": "Ensure the transporter provides a Vehicle Condition Report before and after transit. Also, verify if they have the required permits for intercity or interstate transport.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Estimated Delivery Time",
                  "desc": "Ask for a realistic timeline and compare it with industry standards. Be cautious of promises that seem too fast, as they might compromise safety.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Fleet Quality & Handling Process",
                  "desc": "Find out if the company uses well-maintained transport carriers and trained handlers. Poor fleet conditions increase the risk of damage.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Cancellation & Refund Policy",
                  "desc": "Understand the cancellation policy—whether you get a full/partial refund if you need to cancel or reschedule.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Loading & Unloading Safety",
                  "desc": "Ensure the service provider uses ramp lifts and soft straps to prevent damage during loading and unloading.",
                  "icon": "/images/service-box.svg"
               },
               {
                  "title": "Customer Support Accessibility",
                  "desc": "A responsive support team via phone, email, or chat is essential in case you need urgent assistance.",
                  "icon": "/images/service-box.svg"
               }
            ]}
         />

         <FAQ
            faqs={[
               {
                  "question": "How do I book your car relocation services?",
                  "answer": "You can easily book online through our website by entering your pickup and drop locations, vehicle details, and preferred date. You’ll get an instant quote and the option to confirm your booking in just a few clicks."
               },
               {
                  "question": "Will my car be insured during the move?",
                  "answer": "Yes. We provide comprehensive transit insurance that covers any unforeseen damage during transportation. You’ll receive the insurance details before your car is picked up."
               },
               {
                  "question": "How can I track my vehicle in real-time?",
                  "answer": "Once your car is dispatched, you’ll receive regular location updates. A dedicated relocation manager is also assigned for real-time updates and support."
               },
               {
                  "question": "Are there any hidden or surprise charges?",
                  "answer": "None at all. Our pricing is transparent. The quote includes everything—pickup, transit, taxes, and insurance. You pay exactly what you see."
               },
               {
                  "question": "How long will it take to relocate my car?",
                  "answer": "Delivery timelines vary based on distance and route. On average:\nMetro-to-metro: 3–5 days\nTier 1 to Tier 2/3: 4–7 days. We’ll give you an accurate timeline at the time of booking."
               },
               {
                  "question": "Can I keep personal belongings in the car?",
                  "answer": "For safety and legal reasons, we recommend removing all personal items. Only essential tools (jack, stepney, etc.) are allowed."
               },
               {
                  "question": "What kind of carriers do you use?",
                  "answer": "We offer both open and enclosed car carriers. Enclosed carriers are recommended for luxury or premium cars for better protection from weather and road debris."
               },
               {
                  "question": "What happens if my car gets damaged in transit?",
                  "answer": "While damages are rare, we offer a 72-hour resolution window with full claim support through our insurance partner. You’re covered."
               },
               {
                  "question": "Do you offer door-to-door pickup and delivery?",
                  "answer": "Yes! We provide fully door-to-door service in over 15,000+ pin codes across India. No terminal visits or extra hassle."
               },
               {
                  "question": "Who do I contact if I need help during the move?",
                  "answer": "You’ll be assigned a personal relocation manager for updates and assistance throughout the journey."
               }
            ]}
         />

         <Testimonial
            testimonials={[
               {
                  "title": "Moved My Sedan Without a Scratch!",
                  "review": "I was super anxious about moving my car from Hyderabad to Delhi, but HappyLocate made it seamless. I could track everything, and the car arrived on time — no damage at all!",
                  "author": "Meenal Sharma",
                  "type": "Delhi",

               },
               {
                  "title": "Trustworthy & Transparent Pricing",
                  "review": "I compared 3 other services, but HappyLocate was the only one that gave me a clear quote with no hidden charges. My Jeep Compass reached from Mumbai to Bangalore within 4 days.",
                  "author": "Siddharth Jain",
                  "type": "Bangalore"
               },
               {
                  "title": "Responsive Support Team",
                  "review": "The dedicated manager kept me informed at every stage. Even when I changed the pickup time, they adjusted without any issues. Best customer service I’ve seen in logistics.",
                  "author": "Ritika Mehra",
                  "type": "Pune"
               },
               {
                  "title": "Safe Transport for My SUV",
                  "review": "I chose the enclosed carrier option, and it was worth it! My Fortuner arrived in perfect shape. Will definitely recommend HappyLocate to friends.",
                  "author": "Ravi Teja",
                  "type": "Hyderabad"
               }
            ]}
         />
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