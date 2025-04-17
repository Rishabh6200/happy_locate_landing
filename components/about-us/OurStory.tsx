'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import Link from 'next/link';

const OurStory: React.FC = () => {
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));
  return (
    <section className="w-full">
      <Container maxWidth='lg' className="relative py-10 sm:py-20">
        <Image
          src='/images/subsection-dots.svg'
          alt=''
          fill
          className='absolute -top-16 -z-20 object-cover mx-6 hidden md:block'
        />
        <div className=" mx-auto flex gap-16 items-center lg:flex-row flex-col-reverse text-left lg:text-left">
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

            <>
              <Button
                variant="text"
                className="hidden sm:flex px-0 py-0 w-44 normal-case text-black font-bold items-center gap-2"
                LinkComponent={Link}
                href="/contact-us"
              >
                <span>CONTACT NOW</span>
                <div
                  className="p-2 bg-[--primary-color] flex items-center justify-center"
                  style={{ backgroundColor: palette.primary.main }}
                >
                  <ArrowOutward className="text-white" fontSize="small" />
                </div>
              </Button>

              <Button
                variant="contained"
                className="flex pl-4 sm:hidden px-3 py-2 w-56 normal-case text-white font-bold items-center justify-between rounded-full"
                style={{ backgroundColor: palette.primary.main }}
                LinkComponent={Link}
                href="/contact-us"
              >
                <span>Contact Us</span>
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <ArrowOutward
                    className="text-[--primary-color]"
                    style={{ color: palette.primary.main }}
                    fontSize="small"
                  />
                </div>
              </Button>
            </>


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
