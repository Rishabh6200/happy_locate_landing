'use client';
import { PlayArrow } from '@mui/icons-material';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const WatchIntro = () => {
   const videoRef = useRef<HTMLVideoElement>(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [hasMounted, setHasMounted] = useState(false);

   useEffect(() => {
      setHasMounted(true);
   }, []);

   const handlePlay = () => {
      setIsPlaying(true); // Show video
      setTimeout(() => {
         videoRef.current?.play(); // Wait a moment to ensure it's mounted
      }, 100);
   };
   if (!hasMounted) return null;
   return (
      <div className="relative bg-[#0F0F0F] py-8 sm:py-16 px-4 flex justify-center items-center">
         <Image
            src="/images/subsection-dots.svg"
            alt=""
            fill
            className="absolute -top-10 object-cover sm:h-2/3 h-[60vh]"
         />

         <Box className="relative overflow-hidden rounded-xl sm:h-[70vh] shadow-lg max-w-6xl w-full aspect-video">
            {/* Thumbnail */}
            {!isPlaying ? (
               <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
                  <Image
                     src="/images/about-video.svg"
                     alt="Watch Introduction"
                     fill
                     className="object-cover rounded-xl"
                  />
               </div>
            ) : (
               <video
                  ref={videoRef}
                  src="/video/video.mp4"
                  className="w-full h-full object-cover rounded-xl"
                  muted
                  loop
                  controls
                  playsInline
               />
            )}
         </Box>
      </div>
   );
};

export default WatchIntro;
