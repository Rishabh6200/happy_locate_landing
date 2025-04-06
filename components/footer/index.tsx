// "use client";
// import React from "react";
// import {
//    Container,
//    Typography,
//    IconButton,
//    Link as MuiLink,
// } from "@mui/material";
// import {
//    Facebook,
//    Instagram,
//    Telegram,
//    LinkedIn,
//    LocationOn,
//    Phone,
//    Mail,
// } from "@mui/icons-material";
// import Image from "next/image";

// const Footer = () => {
//    return (
//       <footer className="bg-[#111] text-white pt-12 pb-6">
//          <Container maxWidth="lg">
//             <div className="flex flex-col lg:flex-row justify-between gap-12">
//                {/* Branding & Socials */}
//                <div className="flex flex-col items-start text-left max-w-sm">
//                   <Image
//                      src="/images/BRAND.png"
//                      alt="HappyLocate Logo"
//                      width={200}
//                      height={60}
//                      priority
//                   />
//                   <Typography className="mt-4 text-gray-300 text-sm leading-relaxed">
//                      VSG Pest Control offers reliable, eco-friendly pest control services with over 10 years of experience.
//                   </Typography>
//                   <div className="flex space-x-3 mt-4">
//                      {[Facebook, Instagram, Telegram, LinkedIn].map((Icon, idx) => (
//                         <IconButton
//                            key={idx}
//                            className="text-white hover:text-blue-500 bg-[#1c1c1c] border border-gray-700"
//                            size="small"
//                         >
//                            <Icon fontSize="small" />
//                         </IconButton>
//                      ))}
//                   </div>
//                </div>

//                {/* Navigation & Info */}
//                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
//                   {/* HappyLocate Links */}
//                   <div className="space-y-2 text-start">
//                      <Typography variant="subtitle1" className="font-semibold text-white">HappyLocate</Typography>
//                      {["About us", "Partner", "Affiliate Program", "Careers", "FAQ’s", "Contact us"].map((text, idx) => (
//                         <MuiLink
//                            key={idx}
//                            href="#"
//                            className="block text-sm text-gray-400 hover:text-white"
//                            underline="hover"
//                         >
//                            {text}
//                         </MuiLink>
//                      ))}
//                   </div>

//                   {/* Resources */}
//                   <div className="space-y-2 text-start">
//                      <Typography variant="subtitle1" className="font-semibold text-white">Resources</Typography>
//                      {["Instant quote", "Track shipment", "Privacy Policy", "Refund Policy", "Terms & Conditions"].map((text, idx) => (
//                         <MuiLink
//                            key={idx}
//                            href="#"
//                            className="block text-sm text-gray-400 hover:text-white"
//                            underline="hover"
//                         >
//                            {text}
//                         </MuiLink>
//                      ))}
//                   </div>

//                   {/* Contact */}
//                   <div className="space-y-2 text-sm text-gray-400">
//                      <Typography variant="subtitle1" className="font-semibold text-white text-start">Get in Touch</Typography>
//                      <div className="flex items-center gap-2">
//                         <LocationOn fontSize="small" /> Mumbai, India
//                      </div>
//                      <div className="flex items-center gap-2">
//                         <Phone fontSize="small" /> +91-8884447713 - Support
//                      </div>
//                      <div className="flex items-center gap-2">
//                         <Phone fontSize="small" /> +91-8884447224 - Sales
//                      </div>
//                      <div className="flex items-center gap-2 break-all">
//                         <Mail fontSize="small" /> Reachus@happylocate.com
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
//                © 2025 VSG pest. All rights reserved.
//             </div>
//          </Container>
//       </footer>
//    );
// };

// export default Footer;

"use client";
import React from "react";
import {
   Container,
   Typography,
   IconButton,
   Link as MuiLink,
} from "@mui/material";
import {
   Facebook,
   Instagram,
   Telegram,
   LinkedIn,
   LocationOn,
   Phone,
   Mail,
} from "@mui/icons-material";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className="bg-[#111] text-white pt-12 pb-6">
         <Container maxWidth="lg">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
               {/* Branding & Socials */}
               <div className="flex flex-col items-start text-left max-w-sm">
                  <Image
                     src="/images/BRAND.png"
                     alt="HappyLocate Logo"
                     width={200}
                     height={60}
                     priority
                  />
                  <Typography className="mt-4 text-gray-300 text-base leading-relaxed">
                     VSG Pest Control offers reliable, eco-friendly pest control services with over 10 years of experience.
                  </Typography>
                  <div className="flex space-x-3 mt-4">
                     {[Facebook, Instagram, Telegram, LinkedIn].map((Icon, idx) => (
                        <IconButton
                           key={idx}
                           className="text-white hover:text-blue-500 bg-[#1c1c1c] border border-gray-700"
                           size="small"
                        >
                           <Icon fontSize="small" />
                        </IconButton>
                     ))}
                  </div>
               </div>

               {/* Navigation & Info */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center sm:text-left">
                  {/* HappyLocate Links */}
                  <div className="space-y-2 text-start">
                     <Typography variant="subtitle1" className="font-semibold text-white text-base">HappyLocate</Typography>
                     {["About us", "Partner", "Affiliate Program", "Careers", "FAQ’s", "Contact us"].map((text, idx) => (
                        <MuiLink
                           key={idx}
                           href="#"
                           className="block text-base text-gray-400 hover:text-white"
                           underline="hover"
                        >
                           {text}
                        </MuiLink>
                     ))}
                  </div>

                  {/* Resources */}
                  <div className="space-y-2 text-start">
                     <Typography variant="subtitle1" className="font-semibold text-white text-base">Resources</Typography>
                     {["Instant quote", "Track shipment", "Privacy Policy", "Refund Policy", "Terms & Conditions"].map((text, idx) => (
                        <MuiLink
                           key={idx}
                           href="#"
                           className="block text-base text-gray-400 hover:text-white"
                           underline="hover"
                        >
                           {text}
                        </MuiLink>
                     ))}
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 text-gray-400">
                     <Typography variant="subtitle1" className="font-semibold text-white text-start text-base">Get in Touch</Typography>
                     <div className="flex items-center gap-2">
                        <LocationOn fontSize="medium" /> Mumbai, India
                     </div>
                     <div className="flex items-center gap-2">
                        <Phone fontSize="medium" /> +91-8884447713 - Support
                     </div>
                     <div className="flex items-center gap-2">
                        <Phone fontSize="small" /> +91-8884447224 - Sales
                     </div>
                     <div className="flex items-center gap-2 break-all">
                        <Mail fontSize="small" /> Reachus@happylocate.com
                     </div>
                  </div>
               </div>
            </div>

         </Container>
         {/* Bottom Bar */}
         <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
            © 2025 VSG pest. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
