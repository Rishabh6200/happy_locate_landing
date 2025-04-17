"use client";
import { ChevronRight } from '@mui/icons-material';
import { Box, Container, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

interface ServiceHeaderProps {
   title: string;
   breadcrumb: string;
   isImage?: boolean;
}

const Header: FC<ServiceHeaderProps> = ({ title, breadcrumb, isImage = true }) => {
   const { palette } = useTheme();

   return (
      <Box
         bgcolor="primary.main"
         className="relative w-full min-h-[360px] bg-primary overflow-visible pt-[5%]"
      >
         <Container maxWidth="lg">
            <div className="relative mx-auto py-8 pt-14 z-20">
               <div
                  className="inline-flex bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide"
                  style={{ color: palette.primary.main }}
               >
                  Home <ChevronRight className="inline-block align-middle mx-1" fontSize="small" /> {breadcrumb}
               </div>
               <h1 className="text-white text-4xl md:text-4xl font-semibold leading-tight max-w-xl">
                  {title}
               </h1>
            </div>

            {/* Background clip image */}
            <div className="absolute top-0 right-0 w-1/2 h-full z-10">
               <Image
                  src="/images/header-clip.svg"
                  alt="clip"
                  fill
                  className="object-cover hidden sm:block"
               />
               <Image
                  src="/images/mobile-about-side.svg"
                  alt="clip"
                  fill
                  className="object-cover sm:hidden"
               />
            </div>
         </Container>
      </Box>
   );
};

export default Header;
