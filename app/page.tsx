import FAQ from "@/components/common/FAQ";
import BlogSection from "@/components/home/BlogSection";
import BrandLogos from "@/components/home/BrandLogos";
import FreeQuote from "@/components/home/FreeQuote";
import HeroSection from "@/components/home/HeroSection";
import OurProcess from "@/components/home/OurProcess";
import RelocationSection from "@/components/home/RelocationSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonial from "@/components/home/Testimonial";
import TrustedSection from "@/components/home/TrustedSection";
import WhyChoose from "@/components/home/WhyChoose";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home | HM',
};

const faqData = [
  {
    question: "What services does HappyLocate offer?",
    answer: `We offer a wide range of relocation services, including:
- Home shifting (local and intercity)
- Office relocation
- Pet relocation (domestic and international)
- Vehicle transportation
- Storage solutions
- Employee relocation for corporates`
  },
  {
    question: "Is my move insured?",
    answer: "Yes, all relocations booked through HappyLocate are insured. We offer comprehensive transit insurance to ensure your belongings are covered during the move."
  },
  {
    question: "Does HappyLocate provide international relocation services?",
    answer: "Yes, we handle both domestic and international relocations, including Packers & Movers, pet and office moves. Our global partners ensure a seamless door-to-door experience."
  },
  {
    question: "Does HappyLocate serve corporate clients?",
    answer: "Absolutely. We work with 150+ corporates across India, providing end-to-end relocation solutions for employees, including home moves, pet relocation, and storage."
  },
  {
    question: "How does HappyLocate ensure the quality of service providers?",
    answer: "We onboard only verified, experienced, and reviewed partners. Each vendor goes through a thorough quality check, background verification, and performance evaluation before becoming part of our network."
  },
  {
    question: "Is there a way to compare quotes from different vendors?",
    answer: "Yes. We offer multiple vendor options with pricing, ratings, and reviews — so you can choose what suits you best, all from one platform."
  },
  {
    question: "What documents are required for relocation?",
    answer: `You’ll need ID proof, address proof, and a list of inventory. 
For pet and international moves, additional documents like health certificates, vaccination records, or customs paperwork may be required. We guide you through the whole process.`
  }
];

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        {/* <Carousel /> */}
        <div className="relative min-h-[35vh] w-full mt-80 sm:mt-20 .mt-1800">
          <Image
            src='/images/demo.svg'
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <BrandLogos />
        <TrustedSection />
        <WhyChoose />
        <OurProcess />
        <FreeQuote />
        <StatsSection />
        <FAQ faqs={faqData} />
        <Testimonial
          testimonials={[
            {
              id: 1,
              name: 'Manisha Nayak',
              designation: 'Associate, Shardul Amarchand Mangaldas & Co.',
              image: '/images/testimonial-man.svg',
              description:
                'I have used their services for my interstate shifting. I had a really good experience. The team is prompt, and the packing and shifting are done neatly and done on time. I had one of my items missing, and they followed up continuously with the vendors and reimbursed me fully for the same. Their prices are also very reasonable. Far cheaper than other shifting services in the market, including Agarwal packers, but the services are at par.',
            },
            {
              id: 2,
              name: 'Tanmay Agarwal',
              designation: 'Vice President at The Coca-Cola Company',
              image: '/images/testimonial-man.svg',
              description:
                'I have shifted 15+ times over last 23 years using various professional relocation services (intra city, inter city and international). HappyLocate clearly stands out trying to create a hassle-free shifting experience. They have a tie up with some very good vendors and they did a thorough job of my recent intra city movement. Differentiated service at competitive rates. Highly recommended.',
            },
            {
              id: 3,
              name: 'Velusamy',
              designation: 'Technical Lead, HCL Technologies',
              image: '/images/testimonial-man.svg',
              description:
                'Really supportive and affordable with a variety of Packers and Movers vendors with different packages. Thanks for your quick support on time. I have referred one of my friends as well.',
            },
          ]}
        />
        <BlogSection />
        <RelocationSection
          descriptionParagraphs={[
            "Moving can be a challenge, but with HappyLocate, it’s a seamless journey. Whether you're relocating your home, office, or pet, we provide end-to-end solutions designed for convenience, reliability, and peace of mind. Our expertise ensures a hassle-free experience, with customized services tailored to your specific needs.",
            "From secure packing to safe transportation, we handle every detail with precision. Our commitment to transparency means no hidden costs, Journey tracking, and dedicated support at every stage. Whether you're shifting within the city, across states, or internationally, our extensive network and skilled professionals ensure a smooth transition.",
            "For Pet parents, we offer specialized relocation services that prioritize safety and comfort, so your furry companions travel stress-free. Businesses can rely on us for efficient office moves, minimizing downtime and ensuring a swift setup. With HappyLocate, relocation is more than just a move, it’s a seamless transition to your next chapter. Trust us to handle the details while you enjoy a hassle-free experience.",
          ]}
          locations={[
            "Move with Ease – Delhi",
            "Move with Ease –Bangalore",
            "Move with Ease –Pune",
            "Move with Ease –Chennai",
            "Move with Ease –Kolkata",
            "Move with Ease –Mysore",
            "Move with Ease –Hyderabad",
            "Move with Ease –Mumbai",
          ]}
        />
      </div>
    </>
  );
}
