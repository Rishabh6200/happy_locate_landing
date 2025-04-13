import FAQ from "@/components/common/FAQ";
import BlogSection from "@/components/home/BlogSection";
import BrandLogos from "@/components/home/BrandLogos";
import Carousel from "@/components/home/Carousel";
import FreeQuote from "@/components/home/FreeQuote";
import HeroSection from "@/components/home/HeroSection";
import OurProcess from "@/components/home/OurProcess";
import RelocationSection from "@/components/home/RelocationSection";
import ServiceForm from "@/components/home/ServiceForm";
import StatsSection from "@/components/home/StatsSection";
import Testimonial from "@/components/home/Testimonial";
import TrustedSection from "@/components/home/TrustedSection";
import WhyChoose from "@/components/home/WhyChoose";
import { Container } from "@mui/material";

const faqData = [
  {
    question: 'What services does HappyLocate offer?',
    answer: '',
  },
  {
    question: 'Is my move insured?',
    answer:
      'Yes, all relocations booked through HappyLocate are insured. We offer comprehensive transit insurance to ensure your belongings are covered during the move.',
  },
  {
    question: 'Does HappyLocate provide international relocation services?',
    answer: '',
  },
  {
    question: 'Does HappyLocate serve corporate clients?',
    answer: '',
  },
  {
    question: 'How does HappyLocate ensure the quality of service providers?',
    answer: '',
  },
  {
    question: 'Is there a way to compare quotes from different vendors?',
    answer: '',
  },
  {
    question: 'What documents are required for relocation?',
    answer: '',
  },
]

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Carousel />
        <BrandLogos />
        <TrustedSection />
        <WhyChoose />
        <OurProcess />
        <FreeQuote />
        <StatsSection />
        <FAQ faqs={faqData} />
        <Testimonial />
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
      </div>
    </>
  );
}
