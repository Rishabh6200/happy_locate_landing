import { notFound } from 'next/navigation';
import services from '@/json/packer-mover-services.json'
import { FC } from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import ServiceHeader from '@/components/services/ServiceHeader';
import StatsSection from '@/components/services/PackersMoving/StatsSection';
import HowItWorks from '@/components/services/HowItWorks';
import ServicesOffered from '@/components/services/ServicesOffered';
import PricingTable from '@/components/services/PackersMoving/PricingTable';
import FAQ from '@/components/common/FAQ';
import TestimonialCarousel from '@/components/home/Testimonial';
import BlogSection from '@/components/home/BlogSection';
import RelocationSection from '@/components/home/RelocationSection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const slug = (await params).slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHeader
        breadcrumb={service.breadcrumb}
        title={service.title}
        isImage={false}
      />
      <ServiceHeroSection
        data={service.heroSection}
      />
      <StatsSection
        stats={service.statsSection.stats}
      />
      <HowItWorks
        data={service.howItworks}
      />

      <ServicesOffered
        buttonText={service.ServiceOffered.buttonText}
        heading={service.ServiceOffered.heading}
        services={service.ServiceOffered.services}
      />

      <PricingTable
        heading={service.PricingTable.heading}
        description={service.PricingTable.description}
        data={service.PricingTable.data}
      />

      <FAQ
        faqs={service.faqs}
      />
      <TestimonialCarousel />
      <BlogSection />
      <RelocationSection
        descriptionParagraphs={service.RelocationSection.descriptionParagraphs}
        locations={service.RelocationSection.locations}
      />
    </>
  );
}

export default Page;
