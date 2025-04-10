'use client';

import React from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

const inputFields = [
   { label: 'Your Name', placeholder: 'Full Name', key: 'name' },
   { label: 'Phone No.', placeholder: 'Mobile No', key: 'phone', borderLeft: true },
   { label: 'Email Id', placeholder: 'Email', key: 'email', borderLeft: true },
];

const PetTaxiForm = () => {
   return (
      <Container maxWidth="lg">
         <Box className="bg-white shadow-md rounded-2xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mx-auto -mt-20 z-10 relative">
            {/* Inputs Wrapper */}
            <Box className="flex flex-col md:flex-row w-full md:w-[87%] gap-4 md:gap-0">

               {inputFields.map((item, i) => (
                  <Box key={i} className={`flex flex-col w-full md:w-1/3 pr-0 md:px-4 ${i !== 0 && 'md:border-l border-gray-200'}`}>
                     <label className="text-sm font-semibold mb-1  text-gray-800">Your Name</label>
                     <TextField
                        placeholder="Full Name"
                        variant="standard"
                        size="small"
                        InputProps={{
                           disableUnderline: true,
                           sx: {
                              backgroundColor: '#f3f4f6',
                              borderRadius: '8px',
                              px: 2,
                              py: 1,
                           },
                        }}
                     />
                  </Box>
               ))}
            </Box>

            {/* Button */}
            <Box className="w-full md:w-[13%] flex justify-end md:mt-5">
               <Button
                  variant="contained"
                  size="large"
                  className="bg-[#1359D1] text-white font-semibold rounded-md px-6 py-2 w-full capitalize hover:bg-[#0f4cb3] shadow-md"
               >
                  Book Now
               </Button>
            </Box>
         </Box>
      </Container>
   );
};

export default PetTaxiForm;
