import React from 'react';
import { Button, Chip, Container, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
   "Relocations – 3500+ Pets Moved",
   "Destinations – 50+ Countries",
   "Satisfaction – 99% Happy Pet Parents",
   "Quarantine – 0 Delays in Clearance",
   "Airlines – 30+ Airline Partners Approach",
   "Custom Crates – 100% IATA Approved",
   "Documentation – 100% Compliance Guarantee",
   "Pet Safety – 100% Vet-Assured Travel",
];

const MidAboutServices = () => {
   return (
      <section className="bg-white py-10 sm:py-20 px-4 md:px-16">
         <Container maxWidth='lg'>
            <div className="grid md:grid-cols-2 sm:gap-10 items-center">
               {/* Left Images */}
               <div className="relative">
                  <div className="relative h-[50vh] sm:h-[60vh] w-full">
                     <Image
                        src="/images/human-with-dog.svg"
                        alt="Pet 1"
                        fill
                        className="object-contain"
                        priority // optional: for performance if it's above the fold
                     />
                  </div>
               </div>

               {/* Right Content */}
               <div className='sm:mx-10'>
                  <Chip label="About Service" color="primary" className="mb-4 font-medium" />
                  <Typography variant="h5" className="font-bold text-gray-900 mb-6 leading-snug">
                     Benefits Of Hiring Our Pet Relocation Services In India
                  </Typography>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     {benefits.map((benefit, index) => (
                        <Paper
                           key={index}
                           elevation={1}
                           className="flex items-center gap-2 p-3 bg-gray-100"
                        >
                           <CheckCircleIcon color="primary" fontSize="small" />
                           <Typography variant="body2">{benefit}</Typography>
                        </Paper>
                     ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                  LinkComponent={Link}
                  href='https://dashboard.happylocate.com/swift-app/relocations/pam-basic-details'
                  target='_blank'
                  variant="contained" color="primary" size="large" className="rounded-full px-6">
                     Get a Free Quote
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default MidAboutServices;
