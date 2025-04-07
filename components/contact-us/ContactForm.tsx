"use client";

import React from "react";
import { Box, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl, useTheme, Container } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const ContactForm: React.FC = () => {
   const { palette } = useTheme();

   const contactDetails = [
      {
         icon: Phone,
         label: '9888444724',
         href: 'tel:+918888444724',
      },
      {
         icon: Phone,
         label: '9888444713',
         href: 'tel:+918888444713',
      },
      {
         icon: Email,
         label: 'reachus@happylocate.com',
         href: 'mailto:reachus@happylocate.com',
      },
      {
         icon: LocationOn,
         label: 'Mumbai, India',
         href: null, // No link for location
      },
   ];

   return (
      <Container maxWidth='lg' className="-mt-32 z-50! w-full mx-auto px-4 mb-24">
         <Box className="bg-white rounded-3xl shadow-lg flex flex-col-reverse lg:flex-row overflow-hidden">
            {/* Contact Info Section */}
            <Box className="bg-[#1E1E1E] text-white p-8 lg:w-[35%] flex flex-col md:m-3 rounded-2xl">
               <Typography variant="h6" className="mb-4">
                  Contact Information
               </Typography>
               <Typography className="text-gray-300 mb-6">
                  Say something to start a live chat!
               </Typography>

               <Box className="flex flex-col gap-6 flex-grow">
                  {contactDetails.map((item, idx) => (
                     <Box key={idx} className="flex items-center gap-4">
                        <item.icon fontSize="medium" className={`bg-white text-[${palette.primary.main}] p-1 rounded-full`} />
                        {item.href ? (
                           <a href={item.href} className="text-white no-underline">
                              {item.label}
                           </a>
                        ) : (
                           <span className="text-white">{item.label}</span>
                        )}
                     </Box>
                  ))}
               </Box>

               <Box className="flex gap-4 mt-auto pt-6 max-sm:hidden">
                  <a
                     href="#"
                     className="w-9 h-9 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: palette.primary.main }}
                  >
                     <img src="/icons/x.svg" alt="WhatsApp" className="w-5 h-5" />
                  </a>

                  <a
                     href="#"
                     className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
                  >
                     <img src="/icons/instagram.svg" alt="LinkedIn" className="w-5 h-5" />
                  </a>

                  <a
                     href="#"
                     className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
                  >
                     <img src="/icons/fb.svg" alt="Facebook" className="w-5 h-5" />
                  </a>

                  <a
                     href="#"
                     className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
                  >
                     <img src="/icons/whatsapp.svg" alt="YouTube" className="w-5 h-5" />
                  </a>
               </Box>
            </Box>

            {/* Form Section */}
            <Box className="p-8 lg:w-[65%]">
               <Typography variant="h5" className="text-gray-800 font-bold mb-2">
                  Let's Get In Touch
               </Typography>
               <Typography className="text-gray-600 mb-6">
                  Or just reach out Manually to {" "}
                  <a href="mailto:happylocate@.com" className="text-blue-600 hover:underline">
                     happylocate@.com
                  </a>
               </Typography>
               <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                     <TextField
                        label="Full Name"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                     />
                     <TextField
                        label="Mobile No"
                        type="tel"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                     />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                     <TextField
                        label="Email Id"
                        type="email"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                     />
                     <FormControl fullWidth required sx={{ backgroundColor: 'white' }}>
                        <InputLabel>Select Service</InputLabel>
                        <Select label="Select Service" defaultValue="">
                           <MenuItem value="service1">Service 1</MenuItem>
                           <MenuItem value="service2">Service 2</MenuItem>
                        </Select>
                     </FormControl>
                  </div>

                  <TextField
                     label="Your Message.."
                     multiline
                     rows={4}
                     fullWidth
                     variant="outlined"
                     sx={{ backgroundColor: 'white' }}
                  />

                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     className="rounded-full px-12 py-2 text-white font-semibold shadow-md hover:shadow-lg float-end"
                  >
                     Submit
                  </Button>
               </form>
            </Box>
         </Box>
      </Container>
   );
};

export default ContactForm;
