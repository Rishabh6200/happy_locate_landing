'use client';
import { Box, Container, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const HeroHeader: React.FC = () => {
   const { palette } = useTheme();
   return (
      <Box bgcolor='primary.main' className="relative w-full sm:min-h-[300px] bg-primary overflow-hidden pt-[7%]">
         <Container maxWidth='lg'>
            <div className="relative mx-auto py-8 pt-14 z-20">
               <div className="inline-block bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide" style={{ color: palette.primary.main }}>
                  ABOUT US
               </div>
               <h1 className="text-white text-2xl md:text-5xl font-semibold leading-tight max-w-xl">
                  Know More About us
               </h1>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full z-10">
               <Image
                  src='/images/header-clip.svg'
                  alt='clip'
                  fill
                  className='object-cover hidden sm:block'
               />
               <Image
                  src='/images/mobile-about-side.svg'
                  alt='clip'
                  fill
                  className='object-cover sm:hidden'
               />
            </div>
         </Container>
      </Box>
   );
};

export default HeroHeader;
