import { PlayArrow } from '@mui/icons-material'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const WatchIntro = () => {
   return (
      <div className="relative bg-[#0F0F0F] py-16 px-4 flex justify-center items-center">
         <Image
            src='/images/subsection-dots.svg'
            alt=''
            fill
            className='absolute -top-10 object-cover sm:h-2/3 h-[60vh]'
         />
         <Box
            className="relative overflow-hidden rounded-xl shadow-lg max-w-6xl w-full"
         >
            <Image
               src="/images/about-video.svg" // Replace with actual path
               alt="Watch Introduction"
               width={1200}
               height={600}
               className="w-full h-auto object-cover"
            />

            {/* Play button */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
               <div className="bg-primary rounded-full p-3 mb-2">
                  <PlayArrow className="text-white" fontSize="large" />
               </div>
               <p className="text-white text-xl font-medium">Watch Introduction</p>
            </div> */}
         </Box>
      </div>
   )
}

export default WatchIntro