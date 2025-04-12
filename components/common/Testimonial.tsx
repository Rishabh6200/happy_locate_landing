'use client';

import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';

export interface TestimonialProps {
   testimonials: {
      title: string;
      review: string;
      author: string;
      type: string;
   }[];
}

const Testimonial: FC<TestimonialProps> = ({ testimonials }) => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
   }, [testimonials.length]);

   const current = testimonials[currentSlide];

   return (
      <Container maxWidth='lg'>
         <div className="bg-white py-20 px-4 sm:px-8">
            <div className="mx-auto">
               <div className="w-14 h-14 mb-4">
                  <Image
                     src="/icons/Quotes-icon.svg"
                     alt="quote icon"
                     width={45}
                     height={45}
                     className="object-cover"
                  />
               </div>
               <h3 className="text-2xl font-semibold text-gray-900 mb-4">{current.title}</h3>
               <p className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed mb-10">
                  {current.review}
               </p>
               <div className="flex justify-between items-baseline mt-10">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                        {current.author[0]}
                     </div>
                     <div>
                        <p className="font-semibold text-md">{current.author}</p>
                        <p className="text-sm text-gray-500">{current.type}</p>
                     </div>
                  </div>

                  <div className="flex gap-2">
                     {testimonials.map((_, index) => (
                        <span
                           key={index}
                           className={`h-1.5 w-6 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                           onClick={() => setCurrentSlide(index)}
                           style={{ cursor: 'pointer' }}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Testimonial;