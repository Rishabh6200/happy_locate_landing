import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';

const countries = [
   { name: 'UK', flag: '/flags/uk.svg' },
   { name: 'USA', flag: '/flags/usa.svg' },
   { name: 'Germany', flag: '/flags/germany.svg' },
   { name: 'Australia', flag: '/flags/australia.svg' },
   { name: 'NZ', flag: '/flags/nz.svg' },
   { name: 'Turkey', flag: '/flags/turkey.svg' },
   { name: 'Malaysia', flag: '/flags/Malyasia.svg' },
];

const CountriesGrid = () => {
   return (
      <section className='bg-[#F5F7FB]'>
         <Container maxWidth='lg'>
            <div className="py-10 pb-20">
               <h2 className="text-2xl md:text-3xl font-bold py-10 text-gray-900">Countries We Operate</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {countries.map((country, index) => (
                     <Card
                        key={index}
                        elevation={0}
                        className="flex items-center justify-center rounded-2xl hover:shadow-lg transition-all duration-300"
                     >
                        <CardContent className="flex flex-col items-center">
                           <img
                              src={country.flag}
                              alt={country.name}
                              className="w-14 h-14 rounded-full mb-4 object-cover"
                           />
                           <Typography variant="body1" className="font-semibold text-gray-800">
                              {country.name}
                           </Typography>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
};

export default CountriesGrid;
