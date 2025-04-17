'use client';

import { Box, Typography, Chip, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Step = {
   title: string;
   desc?: string;
};

export type HowItWorksProps = {
   heading?: string;
   subheading?: string;
   chipLabel?: string;
   steps?: Step[];
   imageUrl?: string;
   imageAlt?: string;
};

type Props = {
   data: HowItWorksProps;
};

const HowItWorks: React.FC<Props> = ({ data }) => {
   const {
      heading = 'We provide Effortless Relocation, Guaranteed',
      subheading,
      chipLabel,
      steps = [],
      imageUrl = '',
      imageAlt = 'Illustration image',
   } = data;

   const isValidSteps = Array.isArray(steps) && steps.length > 0;
   const hasImage = Boolean(imageUrl);

   return (
      <section className="bg-[#111111] text-white px-6 lg:px-20 py-12">
         <Container maxWidth="lg">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
               {/* Left Column */}
               <div className="flex flex-col gap-6 w-full">
                  {chipLabel && (
                     <Chip
                        label={chipLabel}
                        className="w-fit bg-white text-black text-xs font-semibold px-4 py-1 rounded-full"
                     />
                  )}

                  {heading && (
                     <Typography
                        variant="h4"
                        component="h2"
                        className="font-bold text-xl md:text-3xl leading-snug text-white"
                     >
                        {heading.split('\n').map((line, idx) => (
                           <React.Fragment key={idx}>
                              {line}
                              <br />
                           </React.Fragment>
                        ))}
                     </Typography>
                  )}

                  {hasImage && (
                     <div className="relative h-[35vh] sm:h-[50vh] rounded-xl overflow-hidden">
                        <Image
                           src={imageUrl}
                           alt={imageAlt}
                           fill
                           className="object-contain -ml-7"
                        />
                     </div>
                  )}
               </div>

               {/* Right Column */}
               {isValidSteps && (
                  <div className="flex flex-col gap-5 w-full max-w-xl sm:mt-20">
                     {steps.map((step, index) => (
                        <div
                           key={index}
                           className="flex items-center gap-4 bg-white text-black p-5 rounded-xl shadow-md"
                        >
                           <div className="bg-[#2563eb] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                           </div>
                           <div>
                              <p className="font-semibold text-base leading-tight">{step.title}</p>
                              {step.desc && (
                                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                    {step.desc}
                                 </p>
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </Container>
      </section>
   );
};

export default HowItWorks;
