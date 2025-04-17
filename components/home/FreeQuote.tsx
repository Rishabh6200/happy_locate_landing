'use client'

import { Button, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Link from 'next/link'

const FreeQuote = () => {

   const { palette } = useTheme();

   return (
      <div className="bg-black text-white py-10">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative rounded-2xl overflow-hidden">
               <div className="rounded-2xl overflow-hidden border-[6px] border-black relative">
                  <Image
                     src="/images/free-quote-section.svg"
                     alt="Relocation"
                     width={600}
                     height={400}
                     className="object-cover w-full h-full rounded-2xl"
                  />
               </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-5">
               <Typography variant="h4" className="!font-bold">
                  Seamless Relocation,<br className="hidden md:block" /> Every Step of the Way!
               </Typography>

               <Typography variant="body1" className="!text-gray-300">
                  Moving should be exciting, not stressful! At HappyLocate, we make your relocation effortless with expert planning, secure handling, and complete transparency. Whether it’s your Home, Office, or Pets, we ensure a smooth transition with zero worries.
               </Typography>

               <ul className="space-y-3">
                  {[
                     "Transparent pricing—no hidden charges, Instant Quotes.",
                     "Professional movers committed to safety and care.",
                     "From packing to delivery, we handle it all for you."
                  ].map((point, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="mt-0.5" style={{ color: palette.primary.main }} />
                        <Typography variant="body2" className="!text-white">
                           {point}
                        </Typography>
                     </li>
                  ))}
               </ul>

               <Button
                  variant="contained"
                  size="large"
                  className="!bg-blue-600 hover:!bg-blue-700 rounded-full px-6 gap-2 mt-4 normal-case"
                  endIcon={<ArrowOutwardIcon className='bg-white h-8 w-8 p-1 rounded-full' color={'primary'} />}
                  LinkComponent={Link}
                  href='https://dashboard.happylocate.com/swift-app/relocations/pet-basic-details'
               >
                  Get a Free Quote
               </Button>
            </div>
         </div>
      </div>
   )
}

export default FreeQuote
