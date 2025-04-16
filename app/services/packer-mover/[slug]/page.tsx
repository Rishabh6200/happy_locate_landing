import { notFound } from 'next/navigation';
import services from '@/json/packer-mover-services.json';
import { FC } from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import ServiceHeader from '@/components/services/ServiceHeader';
import StatsSection from '@/components/services/PackersMoving/StatsSection';
import HowItWorks from '@/components/services/HowItWorks';
import ServicesOffered from '@/components/services/ServicesOffered';
import PricingTable from '@/components/services/PackersMoving/PricingTable';
import FAQ from '@/components/common/FAQ';
import BlogSection from '@/components/home/BlogSection';
import RelocationSection from '@/components/home/RelocationSection';
import Testimonial from '@/components/common/Testimonial';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

const getData = async (slug: string) => {
  return services.find((s) => s.slug === slug);
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getData(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | HappyLocate',
    };
  }

  return {
    title: `${service.title} | Packers & Movers - HappyLocate`,
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const service = await getData(params.slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHeader
        breadcrumb={service.breadcrumb}
        title={service.title}
        isImage={false}
      />
      <ServiceHeroSection data={service.heroSection} />
      <StatsSection stats={service.statsSection.stats} />
      <HowItWorks data={service.howItworks} />
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
      <FAQ faqs={service.faqs} />
      <Testimonial testimonials={service.Testimonial} />
      <BlogSection />
      <RelocationSection
        descriptionParagraphs={service.RelocationSection.descriptionParagraphs}
        locations={service.RelocationSection.locations}
      />
    </>
  );
};

export default Page;