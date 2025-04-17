"use client";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

const founders = [
   {
      name: "Ajay Tiwari",
      title: "Co-Founder & CEO",
      description: "With over 13 years of experience in Human Resources at companies like Nokia and Vodafone, Ajay Tiwari understands the challenges employees face during relocations. His first-hand knowledge of corporate mobility led to the birth of HappyLocate — a tech-driven relocation platform. At HappyLocate, Ajay leads strategy, corporate partnerships, and investor relations, ensuring the platform not only solves real-world problems but also scales with purpose.",
      isBlue: true,
      image: "/images/ajay.jpg",
      quote: "Relocations shouldn’t be stressful — they should be seamless, secure, and supported by technology."
   },
   {
      name: "Sainadh Duvvuru",
      title: "Co-Founder & Chief Business Officer (CBO)",
      description: "An alumnus of NIT and IIM, Sainadh brings a decade of rich experience across sales, marketing, and operations, with leadership roles at HDFC Bank and BPCL. At HappyLocate, he spearheads finance, internal operations, and the development of AI-powered tools that enhance both customer experience and operational efficiency.",
      isBlue: false,
      image: "/images/Sainadh.jpg",
      quote: "At the core of every successful relocation is a smooth, human-centric experience — that’s what we build at HappyLocate."
   }
];

const OurTeam = () => {
   return (
      <section className="bg-gray-50 py-16 px-4 text-center">
         <Typography
            variant="subtitle2"
            className="text-blue-600 font-semibold uppercase tracking-widest"
         >
            Our Team
         </Typography>
         <Typography variant="h4" className="font-bold mb-12">
            Meet Our Inspiring Team
         </Typography>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {founders.map((founder, i) => (
               <div key={i} className="grid grid-cols-1 md:grid-cols-2 min-h-72 py-2">
                  <Box className="overflow-hidden shadow-sm flex md:rounded-bl-4xl rounded-tr-4xl">
                     <Image
                        src={founder.image}
                        alt={founder.name}
                        height={500}
                        width={500}
                        className="w-full h-full object-cover"
                     />
                  </Box>
                  <Box className="bg-white overflow-hidden shadow-sm flex flex-col justify-center px-6 py-3 max-md:-mt-6 border border-gray-200 text-left rounded-tl-4xl rounded-br-4xl">
                     <Typography className="font-semibold text-base mb-1">
                        {founder.name}
                     </Typography>
                     <Typography className="text-gray-600 text-sm mb-2">
                        {founder.title}
                     </Typography>
                     <Divider className="my-3 bg-black" />
                     <Typography className="text-gray-500 text-xs leading-relaxed mb-4">
                        {founder.description}
                     </Typography>
                     <Typography className="italic text-blue-600 text-xs">
                        “{founder.quote}”
                     </Typography>
                  </Box>
               </div>
            ))}
         </div>
      </section>
   );
};

export default OurTeam;
