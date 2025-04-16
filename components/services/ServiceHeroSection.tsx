"use client";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  tagline: string;
  headline: string;
  description: string;
  content: string;
  cta: {
    text: string;
    link: string;
  };
  image: string;
}

const ServiceHeroSection: React.FC<{ data: HeroSectionProps }> = ({ data }) => {
  const { palette } = useTheme();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 sm:py-20 max-w-[1440px] mx-auto sm:gap-10 mb-10 sm:mb-0">
      {/* Left Image */}
      <Box className="relative h-[50vh] sm:h-[60vh] w-full">
        <Image
          src={data.image}
          alt="Service Banner"
          fill
          className="object-contain rounded-xl"
        />
      </Box>

      {/* Right Content */}
      <div className="flex flex-col gap-4 max-w-xl text-gray-700">
        <Chip
          label={data.tagline}
          className="w-fit bg-blue-100 text-blue-700 text-xs font-medium"
        />

        <Typography variant="h5" component="h2" className="font-bold text-gray-900">
          {data.headline}
        </Typography>

        <Typography variant="body2" className="text-sm leading-relaxed text-gray-600">
          {data.description}
        </Typography>

        <Typography variant="body2" className="text-sm leading-relaxed text-gray-600">
          {data.content}
        </Typography>

        <Button
          variant="contained"
          className="text-white px-8 py-3 my-2 rounded-full w-fit normal-case text-sm shadow-md"
          style={{ backgroundColor: palette.primary.main }}
          href={data.cta.link}
          LinkComponent={Link}
        >
          {data.cta.text}
        </Button>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
