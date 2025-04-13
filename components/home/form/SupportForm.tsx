'use client';

import {
   Box,
   Button,
   TextField,
   MenuItem,
   Select,
   FormControl,
   RadioGroup,
   FormControlLabel,
   Radio,
   useMediaQuery,
   useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const services = [
   'Visa',
   'Flight',
   'Hotel',
   'House Search Assistance',
   'Home Interiors',
   'Short Stays',
   'Cabs',
];

const inputFields = [
   { label: 'Your Name', placeholder: 'Shifting From?', key: 'name' },
   { label: 'Phone No.', placeholder: 'Shifting To?', key: 'phone' },
   { label: 'Want to do want?', placeholder: 'Comment...', key: 'comment' },
];

const toSnakeCase = (str: string) =>
   str.toLowerCase().replace(/\s+/g, '_');

const SupportForm = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const [selectedService, setSelectedService] = useState('Flight');
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      comment: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async () => {
      const payload: any = {
         name: formData.name.trim(),
         phone: formData.phone.trim(),
         service: toSnakeCase(selectedService),
         message: formData.comment.trim(),
         // ip: '127.0.0.1', // Replace with real IP if needed
      };

      try {
         const res = await axios.post(
            'https://dashboard.happylocate.com/swift/api/v1/support_tickets/',
            payload
         );
         alert('Support request submitted successfully!');
         console.log('Success:', res.data);
         setFormData({ name: '', phone: '', comment: '' });
      } catch (error: any) {
         console.error('Error Response:', error?.response?.data || error);
         alert('Error: ' + (error?.response?.data?.message || 'Submission failed.'));
      }
   };

   return (
      <>
         {/* Service Type Selector */}
         <Box className="px-4 md:px-8">
            {isMobile ? (
               <FormControl fullWidth>
                  <Select
                     value={selectedService}
                     onChange={(e) => setSelectedService(e.target.value)}
                     size="small"
                     sx={{ backgroundColor: '#f3f4f6', borderRadius: '8px', color: 'black' }}
                     className='mt-2'
                  >
                     {services.map((service) => (
                        <MenuItem key={service} value={service}>
                           {service}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            ) : (
               <RadioGroup
                  row
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="pt-1"
               >
                  {services.map((service) => (
                     <FormControlLabel
                        key={service}
                        value={service}
                        control={<Radio size="small" />}
                        label={service}
                     />
                  ))}
               </RadioGroup>
            )}
         </Box>

         {/* Form Section */}
         <Box className="bg-white shadow-md rounded-2xl px-4 md:px-2 md:pr-12 py-2 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mx-auto mt-0 z-10 relative">
            <Box className="flex flex-col md:flex-row w-full gap-4 md:gap-6 flex-grow">
               {inputFields.map((item, i) => (
                  <Box
                     key={i}
                     className={`flex flex-col flex-1 pr-0 md:px-4 ${i !== 0 ? 'md:border-l border-gray-200' : ''}`}
                  >
                     <label className="text-sm font-semibold mb-1 text-gray-800">
                        {item.label}
                     </label>
                     <TextField
                        name={item.key}
                        value={(formData as any)[item.key]}
                        onChange={handleChange}
                        placeholder={item.placeholder}
                        variant="standard"
                        size="small"
                        InputProps={{
                           disableUnderline: true,
                           sx: {
                              backgroundColor: '#f3f4f6',
                              borderRadius: '8px',
                           },
                           className: 'h-10 p-1 px-4 pt-3 items-center',
                        }}
                     />
                  </Box>
               ))}
            </Box>

            {/* Submit Button */}
            <Box className="w-full md:max-w-[180px] flex justify-end md:mt-5">
               <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  className="bg-[#1359D1] text-white font-semibold rounded-md px-6 py-2 w-full capitalize hover:bg-[#0f4cb3] shadow-md"
               >
                  Submit
               </Button>
            </Box>
         </Box>
      </>
   );
};

export default SupportForm;
