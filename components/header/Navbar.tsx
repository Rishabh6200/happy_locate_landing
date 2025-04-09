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
  Menu,
  MenuItem,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Dropdown hover handlers
  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Scroll elevation effect
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

  const signupLinks = [
    { label: 'Customer Login', href: '/about-us' },
    { label: 'Partner Login', href: '/about-us' },
    { label: 'Corporate Login', href: '/about-us' },
    { label: 'Affiliate Login', href: '/about-us' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      className={`bg-[${palette.primary.main}] shadow shadow-[#494747b1] transition-all duration-300 z-[1100] h-20 ${scrolled ? 'top-0' : 'top-[40px]'
        }`}
    >
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between items-center h-full w-full px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/white-logo.png"
              alt="HappyLocate Logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Nav Links */}
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
            <div
              className="flex justify-center items-center w-full py-4 max-md:hidden"
              onMouseLeave={handleMouseLeave}
            >
              <Button
                id="signup-button"
                aria-controls={open ? 'signup-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseEnter={handleMouseEnter}
                endIcon={<KeyboardArrowDown className="h-7 w-7" />}
                className="bg-white text-[#1359D1] font-bold capitalize py-2 px-8 rounded-full hover:bg-gray-100"
              >
                Sign Up
              </Button>
              <Menu
                id="signup-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                slotProps={{
                  list: {
                    'aria-labelledby': 'signup-button',
                    onMouseLeave: handleMouseLeave,
                  },
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                className="-ml-3 mt-1"
              >
                {signupLinks.map((item, i) => (
                  <Link href={item.href} key={i} passHref>
                    <MenuItem
                      onClick={handleMouseLeave}
                      className="text-black hover:text-white"
                      style={{
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = palette.primary.main;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </div>

            {/* Mobile Icon */}
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
      </Container>

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

export default Navbar;
