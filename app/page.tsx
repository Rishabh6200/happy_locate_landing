import BlogSection from "@/components/home/BlogSection";
import BrandLogos from "@/components/home/BrandLogos";
import Carousel from "@/components/home/Carousel";
import FreeQuote from "@/components/home/FreeQuote";
import HeroSection from "@/components/home/HeroSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import OurProcess from "@/components/home/OurProcess";
import RelocationSection from "@/components/home/RelocationSection";
import ServiceTabs from "@/components/home/ServiceTabs";
import StatsSection from "@/components/home/StatsSection";
import Testimonial from "@/components/home/Testimonial";
import TrustedSection from "@/components/home/TrustedSection";
import WhyChoose from "@/components/home/WhyChoose";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Container maxWidth='lg' className="relative -mt-10" >
          <ServiceTabs />
        </Container>
        <Carousel />
        <BrandLogos />
        <TrustedSection />
        <WhyChoose />
        <OurProcess />
        <FreeQuote />
        <StatsSection />
        <HomeFAQ />
        <Testimonial />
        <BlogSection />
        <RelocationSection />
      </div>
    </>
  );
}
