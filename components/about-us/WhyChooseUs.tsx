"use client";
import { ArrowOutward } from '@mui/icons-material';
import { Button, Typography, Box, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
   {
      title: "Global Presence",
      text: "From New Delhi to New Zealand, HappyLocate facilitates Globally with trusted partners and expertise, ensuring seamless moves beyond borders.",
      iconSrc: "/icons/WhyChooseUs-icon-one.svg",
      bg: "bg-white",
      textColor: "text-black"
   },
   {
      title: "16000+ Serviceable Pincodes",
      text: "With a widespread domestic network, we serve even the remotest corners of India, making relocations smoother, no matter where you’re moving to or from.",
      iconSrc: "/icons/WhyChooseUs-icon-two.svg",
      bg: "bg-blue-600",
      textColor: "text-white"
   },
   {
      title: "650+ Active Partners Worldwide",
      text: "Our strong network of verified relocation partners across the globe empowers us to deliver efficient, reliable, and on-time services for every customer.",
      iconSrc: "/icons/WhyChooseUs-icon-three.svg",
      bg: "bg-white",
      textColor: "text-black"
   }
];

const WhyChooseUs = () => {
   const { palette } = useTheme();

   return (
      <section className="bg-black py-16 px-4 text-white text-center md:rounded-tl-2xl md:rounded-tr-2xl">
         {/* Subheading */}
         <div className="mb-4">
            <span className="bg-white text-blue-700 px-4 py-1 rounded-full text-xs font-semibold">
               WHY CHOOSE US
            </span>
         </div>

         {/* Heading */}
         <Typography variant="h4" className="font-bold mb-12">
            Why Choose Happylocate
         </Typography>

         {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {cardData.map((card, index) => (
               <Box
                  key={index}
                  className={`${card.bg} ${card.textColor} rounded-2xl p-6 space-y-4`}
               >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.bg === 'bg-white' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
                     <Image src={card.iconSrc!} alt={card.title} width={20} height={20} />
                  </div>
                  <Typography variant="h6" className="font-bold">
                     {card.title}
                  </Typography>
                  <p className={`${card.textColor === 'text-white' ? 'text-white/90' : 'text-gray-500'} text-sm`}>
                     {card.text}
                  </p>
               </Box>
            ))}
         </div>

         {/* CTA Button */}
         <div className="mt-10">
            <Button
               variant="contained"
               size="medium"
               className="rounded-full px-6 gap-2 capitalize font-bold bg-white"
               style={{ color: palette.primary.main }}
               LinkComponent={Link}
               href='https://dashboard.happylocate.com/swift-app/relocations/pam-basic-details'
               target='_blank'
               endIcon={
                  <ArrowOutward
                     className="h-8 w-8 p-1 -mr-2 rounded-full text-white"
                     style={{
                        backgroundColor: palette.primary.main
                     }}
                  />
               }
            >
               Get a Consultation
            </Button>
         </div>
      </section>
   );
};

export default WhyChooseUs;
