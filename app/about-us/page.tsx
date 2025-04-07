import MissionVisionSection from '@/components/about-us/MissionVisionSection'
import OurStory from '@/components/about-us/OurStory'
import OurTeam from '@/components/about-us/OurTeam'
import WatchIntro from '@/components/about-us/WatchIntro'
import WhyChooseUs from '@/components/about-us/WhyChooseUs'
import HeroHeader from '@/components/header/HeroHeader'
import RelocationSection from '@/components/home/RelocationSection'
import React from 'react'

const Page = () => {
   return (
      <>
         <HeroHeader />
         <OurStory />
         <WatchIntro />
         <MissionVisionSection />
         <WhyChooseUs />
         <OurTeam />
         <RelocationSection />
      </>
   )
}

export default Page