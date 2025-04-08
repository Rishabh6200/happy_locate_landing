'use client';

import { Box, Typography, Chip, Container } from '@mui/material';
import Image from 'next/image';

const steps = [
   {
      title: 'Fill-in Pet Details',
      desc: "Fill in your pet's details, vaccination history, travel details.",
   },
   {
      title: 'Get a Free Moving Quote',
      desc: 'Get a quote from our authorised channel partner',
   },
   {
      title: 'Schedule Your Pet Move',
      desc: 'We work with you to pick the best possible date',
   },
   {
      title: 'We got you Handled',
      desc: 'Sit back and relax, let us handle your pet’s relocation',
   },
];

const HowItWorks = () => {
   return (
      <section className="bg-[#111111] text-white px-6 lg:px-20 py-12">
         <Container maxWidth='lg'>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
               {/* Left Column */}
               <div className="flex flex-col gap-6  w-full">
                  <Chip
                     label="How its Work"
                     className="w-fit bg-white text-black text-xs font-semibold px-4 py-1 rounded-full"
                  />

                  <Typography
                     variant="h4"
                     component="h2"
                     className="font-bold text-xl md:text-3xl leading-snug text-white"
                  >
                     We provide Effortless <br />
                     Relocation, Guaranteed
                  </Typography>

                  <div className="relative h-[35vh] sm:h-[50vh] rounded-xl overflow-hidden">
                     <Image
                        src="/images/cat-img.svg"
                        alt="Cat in travel carrier"
                       fill
                        className="object-contain -ml-7"
                     />
                  </div>
               </div>

               {/* Right Column */}
               <div className="flex flex-col gap-5 w-full max-w-xl sm:mt-20">
                  {steps.map((step, index) => (
                     <div
                        key={index}
                        className="flex items-start gap-4 bg-white text-black p-5 rounded-xl shadow-md"
                     >
                        <div className="bg-[#2563eb] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                           {index + 1}
                        </div>
                        <div>
                           <p className="font-semibold text-base leading-tight">{step.title}</p>
                           <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
};

export default HowItWorks;
