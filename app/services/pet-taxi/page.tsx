import FAQ from '@/components/common/FAQ'
import BlogSection from '@/components/home/BlogSection'
import RelocationSection from '@/components/home/RelocationSection'
import TestimonialCarousel from '@/components/home/Testimonial'
import Header from '@/components/pet-taxi/Header'
import PetTable from '@/components/pet-taxi/PetTable'
import PetTaxiForm from '@/components/pet-taxi/PetTaxiForm'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
      <Header
        title='Reliable Pet Taxi Services'
        breadcrumb='Pet Taxi'
        isImage={false}
      />
      <PetTaxiForm />
      <Image
        src='/images/dog_in_car.svg'
        alt='hero'
        height={500}
        width={1000}
        className='w-full h-full -mt-12 hidden md:block'
      />

      <PetTable
        heading="Book Pet – Friendly Cabs For Hassle-Free Pet Travel"
        data={[
          {
            vetVisit: "Convenient pick-up & drop-off",
            transport: "Arranging cafes, restaurants,\nand park escapades",
            airport: "Airport pick-up\nand drop-off",
          },
          {
            vetVisit: "Hassle-free consultations & vaccinations",
            transport: "Reunions of pets with\nfamily and friends",
            airport: "Railway station pick-up\nand drop-off",
          },
          {
            vetVisit: "Reliable vet commutes",
            transport: "Outdoor fun for your\npet anytime.",
            airport: "Convenient drop-n-pick\nanytime",
          },
        ]}
      />

      <FAQ
        faqs={[
          {
            question: "What is a pet taxi service?",
            answer: "A pet taxi is a dedicated transport service for pets—offering safe, stress-free travel to places like vets, airports, grooming centers, boarding facilities, or even between cities.",
          },
          {
            question: "Is your pet taxi service available in all cities?",
            answer:
              "We currently operate in major metro cities and are expanding rapidly. You can check availability by entering your pickup and drop locations on our platform or contacting our team.",
          },
          {
            question: "Is a human companion allowed to travel with the pet?",
            answer: "Yes! In most of our vehicles, one pet parent can accompany their pet. Please inform us in advance so we can assign the right vehicle.",
          },
          {
            question: "How do you ensure my pet’s safety during the ride?",
            answer: "Our vehicles are sanitized, climate-controlled, and operated by trained pet handlers. We also provide seat harnesses, crates (if needed), and real-time tracking for complete peace of mind.",
          },
        ]}
      />
      <TestimonialCarousel
        testimonials={[
          {
            "id": 1,
            "name": "Rohini Pandey",
            "designation": "",
            "image": "/images/testimonial-woman.svg",
            "description": "Relocating my pet Chase from India to London felt like a huge task—until I found HappyLocate. From day one, the team was incredibly supportive, attentive, and genuinely caring. They handled every detail with such precision and love, it truly felt like Chase was in the safest hands possible."
          },
          {
            "id": 2,
            "name": "Vidhi Agarwal",
            "designation": "",
            "image": "/images/testimonial-woman.svg",
            "description": "Relocating Olli from India to Berlin was one of the biggest steps in our journey—and I’m so glad I had HappyLocate by my side. From paperwork to pet care, their team handled everything with warmth and professionalism. Olli arrived safe, happy, and calm—and that peace of mind is priceless. Thank you, HappyLocate, for treating my baby like your own!"
          },
          {
            "id": 3,
            "name": "Nikita",
            "designation": "",
            "image": "/images/testimonial-woman.svg",
            "description": "Relocating Zara from Abu Dhabi to India was a big step, and I was really anxious about it. But HappyLocate made the whole process so smooth and comforting. The team was kind, always kept me updated, and treated Zara with so much care. When she arrived safe and happy, I knew I had made the right choice. Thank you, HappyLocate, for handling everything so beautifully."
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