import Image from 'next/image';
import React from 'react';

const BrandLogos = () => {
   const logos = [
      'amazon.png',
      'titlan.png',
      'spar.png',
      'udann.png',
      'coc.png',
      'klm-logo.png',
      'airfrance-logo.png',
      'southwest.png',
      'swiss-logo.png',
      'tata.png',
   ];

   return (
      <section className="w-full py-10 flex justify-center">
         <div className="flex flex-wrap gap-4 justify-center items-center max-w-6xl">
            {logos.map((item, i) => (
               <div
                  key={i}
                  className="border border-blue-100 rounded-md p-2 w-[100px] h-[60px] flex items-center justify-center hover:shadow-sm transition"
               >
                  <Image
                     src={`/brand-logo/${item}`} // Assuming your images are in public/logos/
                     alt="logo"
                     width={80}
                     height={40}
                     objectFit="contain"
                  />
               </div>
            ))}
         </div>
      </section>
   );
};

export default BrandLogos;
