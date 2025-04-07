"use client";
import React from "react";
import { Container, Typography, Button } from "@mui/material";

const relocationLocations = [
   "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
   "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
   "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
   "Relocation Mumbai", "Relocation Pune", "Relocation Bangalore", "Relocation Mysore",
];

const RelocationSection = () => {
   return (
      <section className="w-full bg-[#F6F6F6]">
         {/* Header */}
         <div className="bg-blue-800 py-4 px-6">
            <Container maxWidth="lg" className="px-4">
               <Typography variant="h6" className="text-white font-semibold">
                  Trusted Relocation Services Across India
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
               Effortless Relocation, Every Step of the Way With HappyLocate
            </Typography>

            <Typography variant="body1" className="text-gray-700 mb-4">
               Moving can be a challenge, but with HappyLocate, it’s a seamless journey. Whether you're relocating your home, office, or pet, we provide end-to-end solutions designed for convenience, reliability, and peace of mind. Our expertise ensures a hassle-free experience, with customized services tailored to your specific needs.
            </Typography>

            <Typography variant="body1" className="text-gray-700 mb-4">
               From secure packing to safe transportation, we handle every detail with precision. Our commitment to transparency means no hidden costs, Journey tracking, and dedicated support at every stage. Whether you're shifting within the city, across states, or internationally, our extensive network and skilled professionals ensure a smooth transition.
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
               For Pet parents, we offer specialized relocation services that prioritize safety and comfort, so your furry companions travel stress-free. Businesses can rely on us for efficient office moves, minimizing downtime and ensuring a swift setup.
               With HappyLocate, relocation is more than just a move, it’s a seamless transition to your next chapter. Trust us to handle the details while you enjoy a hassle-free experience.
            </Typography>

            {/* Grid Header */}
            <Typography
               variant="h6"
               className="text-blue-700 font-semibold mt-8 mb-4"
            >
               We Offer Relocation Services in These Indian States
            </Typography>

            {/* Grid of Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
               {relocationLocations.map((location, index) => (
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
