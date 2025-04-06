'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const profileImg = '/images/testimonial-man.svg';

const carouselData = [
   {
      id: 1,
      name: 'Aryan Zaiken',
      designation: 'RRF Institute',
      image: profileImg,
      description:
         'I had a fantastic experience booking my flight through Skyticket. Their website was user-friendly, and I found a great deal within minutes. The whole process was seamless, and I appreciated their transparent pricing. I highly recommend Skyticket for hassle-free and affordable travel.'
   },
   {
      id: 2,
      name: 'Aryan Zaiken',
      designation: 'RRF Institute',
      image: profileImg,
      description:
         'I had a fantastic experience booking my flight through Skyticket. Their website was user-friendly, and I found a great deal within minutes. The whole process was seamless, and I appreciated their transparent pricing. I highly recommend Skyticket for hassle-free and affordable travel. loremsdjkfbsdkjfbsdjkfbsdkjfbsdjkfbsdkjbfd'
   },
   {
      id: 3,
      name: 'Aryan Zaiken',
      designation: 'RRF Institute',
      image: profileImg,
      description:
         'I had a fantastic experience booking my flight through Skyticket. Their website was user-friendly, and I found a great deal within minutes. The whole psdfnsdjfshkjhfjk sdfhskdfhsd fsdhfo sdhfoshd rocess was seamless, and I appreciated their transparent pricing. I highly recommend Skyticket for hassle-free and affordable travel.sdlfgsdfksdf'
   }
];

const TestimonialCarousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }, 6000);
      return () => clearInterval(interval);
   }, []);

   const current = carouselData[currentSlide];

   return (
      <div className="bg-white py-20 px-4 sm:px-8">
         <div className="max-w-4xl mx-auto">
            <div className="w-14 h-14">
               <Image
                  src='/icons/Quotes-icon.svg'
                  alt='logo'
                  width={45}
                  height={45}
                  className="object-cover"
               />
            </div>
            <p className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed mb-10">
               {current.description}
            </p>
            <div className="flex justify-between items-baseline mt-10">
               {/* Left: Avatar and Text */}
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                     <Image
                        src={current.image}
                        alt={current.name}
                        width={56}
                        height={56}
                        className="object-cover"
                     />
                  </div>
                  <div>
                     <p className="font-semibold text-md">{current.name}</p>
                     <p className="text-sm text-gray-500">{current.designation}</p>
                  </div>
               </div>

               {/* Right: Dash Pagination */}
               <div className="flex gap-2">
                  {carouselData.map((_, index) => (
                     <span
                        key={index}
                        className={`h-1.5 w-6 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                           }`}
                        onClick={() => setCurrentSlide(index)}
                        style={{ cursor: 'pointer' }}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TestimonialCarousel;
