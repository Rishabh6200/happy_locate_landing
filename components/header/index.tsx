'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services/delhi' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      className={`bg-[#1359D1] transition-all duration-300 z-[1100] h-20 ${
        scrolled ? 'top-0' : 'top-[40px]'
      }`}
    >
      <Toolbar className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-6 md:px-8 sm:px-4 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-8">
          <Image
            src='/images/white-logo.png'
            alt="HappyLocate Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Nav Links (desktop) */}
        <Box className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-base font-medium hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* Sign Up + Mobile Menu */}
        <Box className="flex items-center gap-2">
          <Button
            className="bg-white text-[#1359D1] capitalize py-2 px-8 rounded-lg font-medium ml-4 hidden md:inline hover:bg-gray-100"
          >
            Sign Up
          </Button>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="md:hidden"
      >
        <Box className="w-[250px] bg-[#1359D1] h-full p-8">
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.label}
                component={Link}
                href={link.href}
                className="text-white no-underline py-4 text-base font-medium"
              >
                {link.label}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
