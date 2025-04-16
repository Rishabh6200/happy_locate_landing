import MissionVisionSection from '@/components/about-us/MissionVisionSection'
import OurStory from '@/components/about-us/OurStory'
import OurTeam from '@/components/about-us/OurTeam'
import WatchIntro from '@/components/about-us/WatchIntro'
import WhyChooseUs from '@/components/about-us/WhyChooseUs'
import HeroHeader from '@/components/header/HeroHeader'
import RelocationSection from '@/components/home/RelocationSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
   title: 'About Us | HM',
};

const Page = () => {
   return (
      <>
         <HeroHeader />
         <OurStory />
         <WatchIntro />
         <MissionVisionSection />
         <WhyChooseUs />
         <OurTeam />
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
      </>
   )
}

export default Page