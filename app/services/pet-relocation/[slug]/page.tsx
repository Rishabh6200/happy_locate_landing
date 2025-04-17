import ServiceHeader from '@/components/services/ServiceHeader'
import React, { FC } from 'react'
import json from '@/json/pet-relocarion-services.json';
import { notFound } from 'next/navigation';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import HowItWorks from '@/components/services/HowItWorks';
import ServicesOffered from '@/components/services/ServicesOffered';
import FAQ from '@/components/common/FAQ';
import BlogSection from '@/components/home/BlogSection';
import TestimonialCarousel from '@/components/home/Testimonial';
import RelocationSection from '@/components/home/RelocationSection';
import PetTransportPricingTable from '@/components/services/pet-relocation/PetTransportPricingTable';
import MidAbout from '@/components/services/pet-relocation/MidAbout';
import { Metadata } from 'next';


interface PageProps {
   params: Promise<{
      slug: string;
   }>;
}

const getData = async (slug: string) => {
   return json.find((s) => s.slug === slug);
 };
 
 export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const resolvedParams = await params;
   const service = await getData(resolvedParams.slug);
 
   if (!service) {
     return {
       title: 'Service Not Found | HappyLocate',
       description: 'The service you are looking for does not exist.',
     };
   }
 
   return {
     title: `${service.title} | Pet Relocation - HappyLocate`,
   };
 }

const Page: FC<PageProps> = async ({ params }) => {
   const slug = (await params).slug;
   const service = json.find((s) => s.slug === slug);

   if (!service) notFound();

   return (
      <>
         <ServiceHeader
            title={service.title}
            breadcrumb={service.breadcrumb}
         />
         <ServiceHeroSection
            data={service.intro}
         />
         <HowItWorks
            data={{
               "heading": "We provide Effortless Relocation, Guaranteed",
               "chipLabel": "How It's Work",
               "steps": [
                  {
                     "title": "Fill-in Pet Details",
                     "desc": "Fill in your pet's details, vaccination history, travel details"
                  },
                  {
                     "title": "Get a Free Moving Quote",
                     "desc": "Get a quote from our authorised channel partner"
                  },
                  {
                     "title": "Schedule Your Pet Move",
                     "desc": "We work with you to pick the best possible date"
                  },
                  {
                     "title": "We got you Handled",
                     "desc": "Sit back and relax, let us handle your pet's relocation"
                  }
               ],
               "imageUrl": "/images/cat-img.svg",
               "imageAlt": "A small orange tabby cat looking out from inside a pet carrier."
            }}
         />
         <ServicesOffered
            heading={service.documentsRequired?.heading || ''}
            buttonText={service.documentsRequired?.ctaTitle || ''}
            services={service.documentsRequired?.list || []}
         />
         {service.type === 'Domestic' && service.pricingTable && (
            <>
               <PetTransportPricingTable
                  heading={service.pricingTable.heading || ''}
                  description={service.pricingTable.description || ''}
                  image={service.pricingTable.image || ''}
                  imageAlt={service.pricingTable.imageAlt || ''}
                  data={service.pricingTable.data || []}
               />
               <MidAbout />
            </>
         )}
         <FAQ
            faqs={service.faq || []}
         />
         <TestimonialCarousel
            testimonials={service.testimonial || []}
         />
         <BlogSection />

         {service.type === 'Domestic' ? <RelocationSection
            descriptionParagraphs={[
               "Relocating can be overwhelming, but not with HappyLocate! Whether you're moving your home, office, or even your pet, we provide seamless, reliable, and affordable relocation services tailored to your needs. With our expertise and commitment to excellence, we make moving hassle-free and stress-free for customers across India. At HappyLocate, we understand that every move is unique, and so are your requirements. That's why we offer customized relocation solutions designed to suit your timeline, budget, and specific preferences. From carefully packing your belongings to ensuring their safe delivery, we handle every step with precision and care. What sets us apart is our dedication to transparency and trust. With clear pricing, no hidden costs, and real-time tracking, you stay informed and in control throughout the entire relocation process. Whether it's a local move or an interstate shift, we've got you covered with our extensive network and professional team.",
               "Our team of skilled professionals is trained to handle even the most delicate or complex relocations with ease. From valuable antiques to sensitive office equipment, we ensure everything arrives at its destination in perfect condition. For pet lovers, our specialized pet relocation services ensure your furry friends travel comfortably and safely. With HappyLocate, you don't just relocate; you start a new chapter without the stress of moving. Let us take care of the details while you focus on what matters most. Whether it's your first move or your tenth, we guarantee a smooth, efficient, and happy moving experience every time."
            ]}
            locations={[
               "Packer & Mover Mumbai",
               "Packer & Mover Mumbai",
               "Packer & Mover Mumbai",
               "Packer & Mover Mumbai",
               "Packer & Mover Delhi",
               "Packer & Mover Delhi",
               "Packer & Mover Delhi",
               "Packer & Mover Delhi",
               "Packer & Mover Gurugram",
               "Packer & Mover Gurugram",
               "Packer & Mover Gurugram",
               "Packer & Mover Gurugram",
               "Packer & Mover Ahmedabad",
               "Packer & Mover Ahmedabad",
               "Packer & Mover Ahmedabad",
               "Packer & Mover Ahmedabad"
            ]}
         /> :
            <RelocationSection
               descriptionParagraphs={[
                  "Relocating can be overwhelming, but not with HappyLocate! Whether you're moving your home, office, or even your pet, we provide seamless, reliable, and affordable relocation services tailored to your needs. With our expertise and commitment to excellence, we make moving hassle-free and stress-free for customers across India. At HappyLocate, we understand that every move is unique, and so are your requirements. That's why we offer customized relocation solutions designed to suit your timeline, budget, and specific preferences. From carefully packing your belongings to ensuring their safe delivery, we handle every step with precision and care. What sets us apart is our dedication to transparency and trust. With clear pricing, no hidden costs, and real-time tracking, you stay informed and in control throughout the entire relocation process. Whether it's a local move or an interstate shift, we've got you covered with our extensive network and professional team.",
                  "Our team of skilled professionals is trained to handle even the most delicate or complex relocations with ease. From valuable antiques to sensitive office equipment, we ensure everything arrives at its destination in perfect condition. For pet lovers, our specialized pet relocation services ensure your furry friends travel comfortably and safely. With HappyLocate, you don't just relocate; you start a new chapter without the stress of moving. Let us take care of the details while you focus on what matters most. Whether it's your first move or your tenth, we guarantee a smooth, efficient, and happy moving experience every time."
               ]}
               locations={[
                  "Pet Relocation Bangalore",
                  "Pet Relocation Delhi",
                  "Pet Relocation Mumbai"
               ]}
            />}
      </>
   )
}

export default Page