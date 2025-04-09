"use client";
import { CheckCircle } from '@mui/icons-material';
import { Box, Button, Chip, Paper, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';


const features = [
   'Affordable Pricing',
   'Verified Relocation Experts',
   'End-to-End Relocation Support',
   '10,000+ Relocations',
   '99% Damage Protection',
   'On-Time Delivery Guarantee',
];

const HeroSection = () => {
   const { palette } = useTheme();
   return (
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 sm:py-20 max-w-[1440px] mx-auto sm:gap-10 mb-10 sm:mb-0">
         {/* Left Images */}
         <Box className="relative h-[50vh] sm:h-[60vh] w-full">
            <Image
               src="/images/PackersMovingHero.svg" // Updated to the new image
               alt="Relocation Services"
               fill
               className="object-contain rounded-xl"
            />
         </Box>

         {/* Right Content */}
         <div className="flex flex-col gap-4 max-w-xl text-gray-700">
            <Chip label="About Service" className="w-fit bg-blue-100 text-blue-700 text-xs font-medium" />

            <Typography variant="h5" component="h2" className="font-bold text-gray-900">
               Relocating to a new home or office?
            </Typography>

            <Typography variant="body2" className="text-sm leading-relaxed text-gray-600">
               Make your relocation effortless with HappyLocate – India’s most reliable Packers and Movers service. Whether you're shifting within the city, across India, or to any of 50+ countries globally, we bring expertise, efficiency, and care to ensure a smooth transition.
            </Typography>

            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
               {features.map((feature, idx) => (
                  <Paper
                     key={idx}
                     elevation={0}
                     className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100"
                  >
                     <CheckCircle fontSize="small" className={`text-[${palette.primary.main}]`} />
                     <Typography variant="body2" className="text-sm text-gray-800">
                        {feature}
                     </Typography>
                  </Paper>
               ))}
            </Box>

            <Button
               variant="contained"
               className="text-white px-8 py-3 my-2 rounded-full w-fit normal-case text-sm shadow-md"
               style={{ backgroundColor: palette.primary.main }}
            >
               Get a Free Quote
            </Button>
         </div>
      </section>
   );
};

export default HeroSection;
