'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, ToggleButtonGroup, ToggleButton, useTheme } from '@mui/material';

const MissionVisionSection = () => {
   const [view, setView] = useState<'mission' | 'vision'>('mission');
   const { palette } = useTheme();
   return (
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-6 py-16 max-w-7xl mx-auto">
         {/* Left - Image + Stats */}
         <div className="relative sm:w-1/2 h-[60vh]">
            {/* <div className="relative"> */}
            <Image
               src="/images/ourmission-side.svg"
               alt="Happy Family"
               fill
               className="object-contain"
            />
            {/* </div> */}
         </div>

         {/* Right - Text & Tabs */}
         <div className="w-full lg:w-1/2">
            <div className="inline-block bg-[#1359D126] text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide" style={{ color: palette.primary.main }}>
               OUR MISSION & VISION
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
               Transforming Relocations,<br />One Move At A Time!
            </h2>

            <p className="text-gray-600 mb-6">
               Turn the chaos of Relocation into a moment of joy. Blend with innovation, trust, and a customer-first
               approach to make every move seamless – Reimagine Relocation with HappyLocate.
            </p>

            <div className="bg-gray-100 rounded-none overflow-hidden">
               <ToggleButtonGroup
                  value={view}
                  exclusive
                  onChange={(_, newView) => setView(newView)}
                  className="rounded-none flex bg-gray-100"
               >
                  <ToggleButton
                     value="mission"
                     className={`flex-1 px-6 py-2 text-lg normal-case rounded-none border-0 border-t-2 
      ${view === 'mission' ? 'border-blue-600 text-black' : 'border-transparent text-gray-600'}`}
                  >
                     Our Mission
                  </ToggleButton>

                  {/* Divider */}
                  <div className="w-px bg-gray-300 my-2" />

                  <ToggleButton
                     value="vision"
                     className={`flex-1 px-6 py-2 text-lg normal-case rounded-none border-0 border-t-2 
      ${view === 'vision' ? 'border-blue-600 text-black' : 'border-transparent text-gray-600'}`}
                  >
                     Our Vision
                  </ToggleButton>
               </ToggleButtonGroup>
            </div>
            <div className="my-3">
               {view === 'mission' ? (
                  <p className="text-gray-600">
                     To make every Relocation effortless by combining technology, transparency, and care. With over 10000+ successful moves and a network across 50+ countries, mission is to deliver fast, secure, and reliable relocation experiences for individuals, families, and enterprises, every single time.
                  </p>
               ) : (
                  <p className="text-gray-600">
                     Our vision is to revolutionize relocation by setting global standards in quality, customer satisfaction, and trust—empowering people to relocate without stress.
                  </p>
               )}
            </div>
         </div>
      </div>
   );
}
export default MissionVisionSection;