"use client";
import React from "react";
import { Container, Typography, Button } from "@mui/material";

interface RelocationSectionProps {
  title?: string;
  subtitle?: string;
  descriptionParagraphs: string[];
  locations: string[];
}

const RelocationSection: React.FC<RelocationSectionProps> = ({
  title = "Trusted Relocation Services Across India",
  subtitle = "Effortless Relocation, Every Step of the Way With HappyLocate",
  descriptionParagraphs,
  locations,
}) => {
  return (
    <section className="w-full bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-blue-800 py-4 px-6">
        <Container maxWidth="lg" className="px-4">
          <Typography variant="h6" className="text-white font-semibold">
            {title}
          </Typography>
        </Container>
      </div>

      <Container maxWidth="lg" className="py-8 px-4">
        {/* Intro Text */}
        <Typography
          variant="h6"
          className="font-semibold mb-4"
          color="primary"
        >
          {subtitle}
        </Typography>

        {descriptionParagraphs.map((text, idx) => (
          <Typography key={idx} variant="body1" className="text-gray-700 mb-4">
            {text}
          </Typography>
        ))}

        {/* Grid Header */}
        <Typography
          variant="h6"
          className="text-blue-700 font-semibold mt-8 mb-4"
        >
          We Offer Relocation Services in These Indian States
        </Typography>

        {/* Grid of Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <Button
              key={index}
              variant="outlined"
              size="small"
              className="capitalize text-sm bg-white py-2 border-gray-300 text-gray-800 hover:bg-gray-200"
            >
              {location}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RelocationSection;
