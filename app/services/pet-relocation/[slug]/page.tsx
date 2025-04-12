import ServiceHeader from '@/components/services/ServiceHeader'
import React, { FC } from 'react'
import json from '@/json/pet-relocarion-services.json';
import { notFound } from 'next/navigation';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';

interface PageProps {
   params: Promise<{
      slug: string;
   }>;
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
      </>
   )
}

export default Page