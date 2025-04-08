"use client";
import { Box, Button, Chip, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ServiceHeroSection = () => {
   const { palette } = useTheme();
   return (
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 sm:py-32 max-w-[1440px] mx-auto sm:gap-10 mb-10 sm:mb-0">
         {/* Left Images */}
         <Box
            className="relative h-[50vh] sm:h-[60vh] w-full"
         >
            <Image
               src="/images/service-hero-banner.svg" // Replace with your second image path
               alt="Dog walking"
               fill
               className="object-contain rounded-xl"
            />
         </Box>

         {/* Right Content */}
         <div className="flex flex-col gap-4 max-w-xl text-gray-700">
            <Chip label="About Service" className="w-fit bg-blue-100 text-blue-700 text-xs font-medium" />

            <Typography variant="h5" component="h2" className="font-bold text-gray-900">
               Moving Abroad? Take Your Furry Friend Along – Stress-Free!
            </Typography>

            <Typography variant="body2" className="text-sm leading-relaxed text-gray-600">
               Relocating to a new country is exciting, but ensuring your pet’s safety and comfortable journey can be challenging. At HappyLocate, we make International Pet Relocation stress-free, safe, and seamless, so you can focus on your new adventure while we handle the logistics.
            </Typography>

            <Typography variant="body2" className="text-sm leading-relaxed text-gray-600">
               Every year, over 350+ pets travel internationally with us, reaching destinations like the USA, UK, Canada, Australia, UAE, and Europe. With a 98% successful Relocation rate, our team of experts ensures that every detail is covered – From Airline-approved pet Travel crates and customs clearance to Veterinary requirements and Quarantine protocols. We partner with global airlines and pet-friendly services to provide the most comfortable and secure experience for your beloved companion.
            </Typography>

            <Button
               variant="contained"
               className=" text-white px-8 py-3 my-2 rounded-full w-fit normal-case text-sm shadow-md"
               style={{ backgroundColor: palette.primary.main }}
            >
               Get a Free Quote
            </Button>
         </div>
      </section>
   )
}

export default ServiceHeroSection