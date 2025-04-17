import React from 'react';
import { Button, Chip, Container, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Link from 'next/link';

const benefitsData = {
   "chipLabel": "About Service",
   "heading": "Benefits Of Hiring Our Pet Relocation Services In India",
   "list": [
      "100% Stress-Free Travel",
      "End-to-End Paperwork & Permits",
      "5000+ Pets Relocation",
      "Vet & Health Check",
      "Compliance with 50+ Countries",
      "Trusted by 10,000+ Pet Parents"
   ],
   "cta": {
      "label": "Get a Free Quote"
   },
   "image": {
      "src": "/images/human-with-dog.svg",
      "alt": "A person with a dog and a pet carrier"
   }
};

const MidAbout = () => {
   return (
      <section className="bg-white py-10 sm:py-20 px-4 md:px-16">
         <Container maxWidth='lg'>
            <div className="grid md:grid-cols-2 sm:gap-10 items-center">
               {/* Left Image */}
               <div className="relative">
                  <div className="relative h-[50vh] sm:h-[60vh] w-full">
                     <Image
                        src={benefitsData.image.src}
                        alt={benefitsData.image.alt}
                        fill
                        className="object-contain"
                        priority // optional: for performance if it's above the fold
                     />
                  </div>
               </div>

               {/* Right Content */}
               <div className='sm:mx-10'>
                  <Chip label={benefitsData.chipLabel} color="primary" className="mb-4 font-medium" />
                  <Typography variant="h5" className="font-bold text-gray-900 mb-6 leading-snug">
                     {benefitsData.heading}
                  </Typography>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     {benefitsData.list.map((benefit, index) => (
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
                  <Button LinkComponent={Link} href='https://dashboard.happylocate.com/swift-app/relocations/pet-basic-details' variant="contained" color="primary" size="large" className="rounded-full px-6">
                     {benefitsData.cta.label}
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default MidAbout;