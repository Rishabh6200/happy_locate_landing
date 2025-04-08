'use client';

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Email, Phone, Star } from '@mui/icons-material';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <AppBar
      elevation={0}
      position="static"
      className={`h-10 z-[1200] bg-[#164DAC] `}
    >
      <Toolbar
        disableGutters
        className="flex justify-between items-center h-full px-20 max-w-[1440px] mx-auto w-full min-h-10 xl:px-8 lg:px-4"
      >
        <div className="flex items-center gap-2 text-white text-sm font-medium max-sm:mx-auto">
          <Star className="text-yellow-400 text-lg" />
          4.5 Google Rating
        </div>

        <Box className="hidden md:flex items-center gap-4 text-white text-xs font-normal">
          <a href="mailto:reachus@happylocate.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
            <Email className="text-sm" />
            reachus@happylocate.com
          </a>
          <span className="text-white/50 mx-2">|</span>
          <a href="tel:+918884447224" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
            <Phone className="text-sm" />
            +91-888 4447224 - Sales
          </a>
          <span className="text-white/50 mx-2">|</span>
          <a href="tel:+918884447713" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
            <Phone className="text-sm" />
            +91-888 4447713 - Support
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Announcement;
