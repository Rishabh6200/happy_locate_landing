'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Demo = '/images/demo.svg';

const carouselData = [
   {
      id: 1,
      image: Demo,
      title: 'Professional Packing Services',
      description: 'Expert packing solutions for all your valuable items'
   },
   {
      id: 2,
      image: Demo,
      title: 'Safe Transportation',
      description: 'Secure and timely transportation across India'
   },
   {
      id: 3,
      image: Demo,
      title: 'Pet Relocation',
      description: 'Stress-free pet relocation services'
   }
];

const Carousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

   useEffect(() => {
      let interval: any;
      if (isAutoPlaying) {
         interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
         }, 5000);
      }
      return () => clearInterval(interval);
   }, [isAutoPlaying]);

   const handlePrevSlide = () => {
      setIsAutoPlaying(false);
      setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
   };

   const handleNextSlide = () => {
      setIsAutoPlaying(false);
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
   };

   return (
      <div className="relative bg-gray-100 mt-16 overflow-hidden">
         <div className="relative w-full overflow-hidden">
            <div
               className="flex transition-transform duration-500 ease-in-out w-full"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
               {carouselData.map((slide) => (
                  <div key={slide.id} className="flex-none w-full relative">
                     <div className="relative w-full h-[80vh]">
                        <Image
                           src={slide.image}
                           alt={slide.title}
                           width={2000}
                           height={800}
                           className="w-full h-full object-cover"
                           priority={slide.id === 1}
                        />
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-24">
                        <div className="max-w-6xl mx-auto px-6 md:px-12 text-white mb-20">
                           <h2 className="text-4xl font-semibold mb-4 font-poppins sm:text-3xl">{slide.title}</h2>
                           <p className="text-xl opacity-90 max-w-xl font-poppins sm:text-lg">{slide.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="absolute inset-y-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-7xl w-full flex justify-between px-8 pointer-events-none">
               <button
                  className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition pointer-events-auto flex items-center justify-center"
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
               >
                  <ArrowBackIcon />
               </button>
               <button
                  className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition pointer-events-auto flex items-center justify-center"
                  onClick={handleNextSlide}
                  aria-label="Next slide"
               >
                  <ArrowForwardIcon />
               </button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
               {carouselData.map((_, index) => (
                  <button
                     key={index}
                     className={`w-2.5 h-2.5 rounded-full transition ${index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
                        }`}
                     onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentSlide(index);
                     }}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Carousel;
