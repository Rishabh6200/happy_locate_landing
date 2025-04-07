'use client';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
   return (
      <Box bgcolor='primary.main' className="relative -z-30 w-full min-h-[300px] bg-primary overflow-hidden pt-[5%]">
         <Container maxWidth='lg'>
            <div className="relative mx-auto z-20">
               <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
                  Contact Us
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

export default Header;
