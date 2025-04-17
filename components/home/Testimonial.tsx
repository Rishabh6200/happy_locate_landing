'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentSlide];

  return (
    <Container maxWidth="lg">
      <div className="bg-white py-20 px-4 sm:px-8">
        <div className="mx-auto">
          <div className="w-14 h-14">
            <Image
              src="/icons/Quotes-icon.svg"
              alt="quote icon"
              width={45}
              height={45}
              className="object-cover"
            />
          </div>
          <p className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed mb-10">
            {current.description}
          </p>
          <div className="flex justify-between items-baseline mt-10">
            {/* Left: Avatar and Info */}
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

            {/* Right: Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 w-6 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialCarousel;
