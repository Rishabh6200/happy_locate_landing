"use client";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

const founders = [
   {
      name: "Founder Name",
      title: "Co - Founder",
      description:
         "Vivek is the visionary founder and CEO of HappyLocate. With over a decade of expertise in interior design, he leads the team with a passion for creating transfer-motive spaces.",
      isBlue: true,
      image: "/images/man.svg"
   },
   {
      name: "Founder Name",
      title: "Ceo & Founder",
      description:
         "Vivek is the visionary founder and CEO of HappyLocate. With over a decade of expertise in interior design, he leads the team with a passion for creating transfer-motive spaces.",
      isBlue: false,
      image: "/images/woman.svg",
   }
];

const teamMembers = Array.from({ length: 8 }).map((_, index) => ({
   name: index % 2 === 0 ? "Shivamand Pandey" : "Monal Trump",
   title: "Operations Manager",
   image: index % 2 === 0 ? "/images/man.svg" : "/images/woman.svg",
}));

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

         {/* Founders */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {founders.map((founder, i) => (
               <div key={i} className="grid grid-cols-2 h-72">
                  {/* Blue Box with Image */}
                  <Box
                     className="bg-blue-600  overflow-hidden shadow-sm flex rounded-bl-4xl rounded-tr-4xl"
                  >
                     <Image
                        src={founder.image}
                        alt={founder.name}
                        height={500}
                        width={200}
                        className="h-full w-full"
                     />
                  </Box>
                  <Box
                     className="bg-white overflow-hidden shadow-sm flex flex-col justify-center px-6 text-left rounded-tl-4xl rounded-br-4xl"
                  >
                     <Typography className="font-semibold text-base mb-1">
                        {founder.name}
                     </Typography>
                     <Typography className="text-gray-600 text-sm mb-2">
                        {founder.title}
                     </Typography>
                     <Divider className="my-3 bg-black " />
                     <Typography className="text-gray-500 text-xs leading-relaxed">
                        {founder.description}
                     </Typography>
                  </Box>

               </div>
            ))}

         </div>

         {/* Team Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
               <Box
                  key={idx}
                  className="rounded-xl bg-white shadow-sm overflow-hidden text-center"
               >
                  <div className="relative w-full h-64">
                     <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain"
                     />
                  </div>
                  <div className="p-3 text-start">
                     <Typography className="font-semibold text-sm">
                        {member.name}
                     </Typography>
                     <Typography className="text-gray-500 text-xs">
                        {member.title}
                     </Typography>
                  </div>
               </Box>
            ))}
         </div>
      </section>
   );
};

export default OurTeam;
