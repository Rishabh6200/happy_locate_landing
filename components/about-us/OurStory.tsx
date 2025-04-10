'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Container, useTheme } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';

const OurStory: React.FC = () => {
  const { palette } = useTheme();
  return (
    <section className="w-full">
      <Container maxWidth='lg' className="relative py-20">
        <Image
          src='/images/subsection-dots.svg'
          alt=''
          fill
          className='absolute -top-16 -z-20 object-cover mx-6 hidden md:block'
        />
        <div className=" mx-auto px-4 flex gap-16 items-center lg:flex-row flex-col-reverse text-left lg:text-left">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block bg-[#1359D126] text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide" style={{ color: palette.primary.main }}>
              OUR STORY
            </div>

            <h2 className="text-[#333] text-4xl md:text-[2.5rem] font-semibold leading-snug mb-6">
              Redefining Seamless Relocation Across India!
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8 w-[90%]">
              HappyLocate, India’s first and only full-stack Relocation platform, transforming how individuals and organizations move across cities and borders. Successfully managed over 10000+ relocations—spanning Homes, Offices, and beloved pets. With a presence in 100+ cities, partnerships with verified service providers, and a proprietary Tech platform, we ensure every move is 100%  secure, and <br />stress-free. Expanding globally – UAE, USA, UK, Canada, Australia & more.
            </p>

            <Button
              variant="text"
              className={`px-0 py-0 normal-case text-black font-bold flex items-center gap-0`}
            >
              <span className="mr-2">CONTACT NOW</span>
              <div className="bg-[#1359D1] p-2 rounded-sm flex items-center justify-center transition-transform">
                <ArrowOutward className="text-white" fontSize="small" />
              </div>
            </Button>
          </div>

          <div className="flex-1 max-w-[441px] w-full mx-auto">
            <Image
              src='/images/aboutus-side.svg'
              alt="Happy couple moving"
              height={500}
              width={500}
              className="rounded-2xl max-w-[20rem] sm:max-w-[32rem]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
