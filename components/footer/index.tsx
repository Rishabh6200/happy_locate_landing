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

// Link data for the footer
const footerLinks = [
   {
      title: "HappyLocate",
      links: [
         { name: "About us", href: "/about-us" },
         { name: "Partner", href: "#" },
         { name: "Affiliate Program", href: "#" },
         { name: "Careers", href: "#" },
         { name: "FAQ’s", href: "#faq" },
         { name: "Contact us", href: "/contact-us" },
      ],
   },
   {
      title: "Resources",
      links: [
         { name: "Instant quote", href: "/" },
         { name: "Track shipment", href: "/" },
         { name: "Privacy Policy", href: "#" },
         { name: "Refund Policy", href: "#" },
         { name: "Terms & Conditions", href: "#" },
      ],
   },
];

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
                     HappyLocate is your trusted partner for safe, hassle-free home, office and pet relocations across India and abroad.
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
                  {/* Dynamic Link Sections */}
                  {footerLinks.map((section, i) => (
                     <div key={i} className="space-y-2 text-start">
                        <Typography variant="subtitle1" className="font-semibold text-white text-base">
                           {section.title}
                        </Typography>
                        {section.links.map((item, idx) => (
                           <MuiLink
                              key={idx}
                              href={item.href}
                              className="block text-base text-gray-400 hover:text-white"
                              underline="hover"
                           >
                              {item.name}
                           </MuiLink>
                        ))}
                     </div>
                  ))}

                  {/* Contact Info */}
                  <div className="space-y-2 text-gray-400">
                     <Typography variant="subtitle1" className="font-semibold text-white text-start text-base">
                        Get in Touch
                     </Typography>
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
