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
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { East, KeyboardArrowDown } from '@mui/icons-material';
import services from '@/json/packer-mover-services.json';
import { usePathname } from 'next/navigation';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const { palette } = useTheme();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setSubMenuOpen(null);
    setSignUpOpen(false);
  };

  const navLinks = [
    { label: 'About Us', href: '/about-us' },
    {
      label: 'Services',
      children: [
        {
          label: 'Packing & Moving',
          href: '/services/packer-mover',
          subMenu: services.map((service) => ({
            label: service.title,
            href: `/services/packer-mover/${service.slug}`,
          })),
        },
        {
          label: 'Pet Relocation',
          href: '/services/pet-relocation',
          subMenu: services.map((service) => ({
            label: service.title,
            href: `/services/packer-mover/${service.slug}`,
          })),
        },
        { label: 'Pet Taxi', href: '/services/pet-taxi' },
        { label: 'Vehicle Shifting', href: '/services/vehicle-shifting' },
      ],
    },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const signupLinks = [
    { label: 'Customer Login', href: '/about-us' },
    { label: 'Partner Login', href: '/about-us' },
    { label: 'Corporate Login', href: '/about-us' },
    { label: 'Affiliate Login', href: '/about-us' },
  ];

  const navTextColor = pathname === '/' ? 'text-black' : 'text-white';

  return (
    <AppBar
      position="sticky"
      elevation={1}
      className={`${pathname === '/' ? 'bg-white' : `bg-[${palette.primary.main}]`}  transition-all duration-300 z-[1100] h-20 $
      `}
    >
      <Container maxWidth="lg" className="h-full flex items-center">
        <Toolbar className="flex justify-between items-center h-full w-full px-0">
          <Link href="/" className="flex items-center" onClick={closeAllDropdowns}>
            <Image
              src={pathname === '/' ? '/images/brand-nav.svg' : '/images/white-logo.png'}
              alt="Logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <Box className="hidden md:flex items-center gap-10 relative">
            {navLinks.map((link, idx) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => {
                    setServicesOpen(false);
                    setSubMenuOpen(null);
                  }}
                >
                  <Link
                    href={link?.href ?? "#"}
                    onClick={closeAllDropdowns}
                    className={`${navTextColor} text-base font-medium capitalize flex items-center gap-1`}
                  >
                    {link.label}
                    <KeyboardArrowDown />
                  </Link>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div
                        className="absolute top-5 left-8 -translate-y-full w-4 h-4 rotate-45 shadow-md -z-50"
                        style={{ backgroundColor: palette.background.paper }}
                      />
                      <div className=" bg-white shadow-lg rounded-md z-50 py-2 min-w-[220px]">
                        {link.children.map((child, i) =>
                          child.subMenu ? (
                            <div
                              key={i}
                              className="relative group"
                              onMouseEnter={() => setSubMenuOpen(i)}
                              onMouseLeave={() => setSubMenuOpen(null)}
                            >
                              <Link
                                href={child.href ?? '#'}
                                onClick={closeAllDropdowns}
                                className="flex justify-between items-center w-full px-4 py-2 text-black hover:bg-gray-100"
                              >
                                {child.label}
                                <East fontSize="small" />
                              </Link>
                              {subMenuOpen === i && (
                                <div className="absolute top-0 left-full pl-2.5">
                                  <div
                                    className="absolute top-3 left-1.5 w-4 h-4 rotate-45  -z-50"
                                    style={{ backgroundColor: palette.background.paper }}
                                  />
                                  <div className="bg-white shadow-lg rounded-md py-2 min-w-[200px]">
                                    {child.subMenu.map((item, j) => (
                                      <Link
                                        key={j}
                                        href={item.href}
                                        onClick={closeAllDropdowns}
                                        className="block px-4 py-2 text-black hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={i}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeAllDropdowns}
                  className={`${navTextColor} text-base font-medium hover:opacity-80 transition-opacity`}
                >
                  {link.label}
                </Link>
              )
            )}
          </Box>

          {/* Sign Up Dropdown */}
          <div
            className="relative max-md:hidden"
            onMouseEnter={() => setSignUpOpen(true)}
            onMouseLeave={() => setSignUpOpen(false)}
          >
            <Button
              className={`${pathname === '/' ? `text-white bg-[${palette.primary.main}] hover:opacity-80` : `bg-white text-[${palette.primary.main}] hover:bg-gray-100`}  font-bold capitalize py-2 px-8 rounded-full`} endIcon={<KeyboardArrowDown className="h-7 w-7" />}
            >
              Sign Up
            </Button>

            {signUpOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                {signupLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={closeAllDropdowns}
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            color={pathname === '/' ? 'primary' : 'inherit'}
            aria-label="open drawer"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <MobileDrawer
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navLinks={navLinks}
      />
    </AppBar>
  );
};

export default Navbar;
