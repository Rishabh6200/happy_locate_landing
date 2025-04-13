'use client';

import React from 'react';
import { Typography, Container, useTheme } from '@mui/material';
import ServiceForm from './ServiceForm';

const HeroSection = () => {
  const { palette } = useTheme();

  return (
    <section className="bg-white h-[60vh] sm:h-[70vh] lg:h-[35vh] flex items-start py-10 px-4 md:px-0">
      <Container
        maxWidth="lg"
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12"
      >
        <div>
          <Typography
            variant="h4"
            className="font-poppins font-semibold text-black leading-snug md:leading-tight text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] mb-4"
          >
            Relocate Anywhere – <br />
            <span style={{ color: palette.primary.main }}>
              Anytime at Ease!
            </span>
          </Typography>
        </div>
        <div className="flex md:justify-end">
          <Typography className="text-sm sm:text-base text-gray-700 md:w-[85%] leading-relaxed">
            Trusted by{' '}
            <strong className="font-semibold">1.5 Lakh+ Happy Customers</strong>, HappyLocate
            transforms relocation with seamless, stress-free, and tech-driven
            moving solutions. From homes to offices, pets to vehicles—we ensure
            every move is handled with expertise and care. <br />
            Relocate with Ease, Settle with Peace!
          </Typography>
        </div>
        <div className="md:col-span-2 z-40">
          <ServiceForm />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
