'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Container,
  useTheme,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { East, KeyboardArrowDown } from '@mui/icons-material';
import services from '@/json/packer-mover-services.json';
import petRe from '@/json/pet-relocarion-services.json';
import { usePathname } from 'next/navigation';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const pathname = usePathname();
  const { palette } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setHoveredIndex(null);
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
            type: "Packer-mover",
            subType: "Cites",
            label: service.title,
            href: `/services/packer-mover/${service.slug}`,
          })),
        },
        {
          label: 'Pet Relocation',
          href: '/services/pet-relocation',
          subMenu: petRe.map((service) => ({
            type: service.type,
            subType: "",
            label: service.title,
            href: `/services/pet-relocation/${service.slug}`,
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
    { label: 'Customer Login', href: 'https://dashboard.happylocate.com/login' },
    { label: 'Partner Login', href: 'https://dashboard.happylocate.com/packers-and-movers-vendor/login' },
    { label: 'Corporate Login', href: 'https://dashboard.happylocate.com/corporates/login' },
    { label: 'Affiliate Login', href: 'https://dashboard.happylocate.com/affiliate/login' },
  ];

  const navTextColor = pathname === '/' ? 'text-black' : 'text-white';

  // Handle submenu delay
  useEffect(() => {
    if (
      hoveredIndex !== null &&
      navLinks.find(link => link.label === 'Services')?.children?.[hoveredIndex]?.subMenu
    ) {
      const timeout = setTimeout(() => setSubmenuVisible(true), 200);
      return () => clearTimeout(timeout);
    } else {
      setSubmenuVisible(false);
    }
  }, [hoveredIndex]);

  return (
    <AppBar
      position="sticky"
      elevation={1}
      className={`${pathname === '/' ? 'bg-white' : 'bg-primary'
        } z-[1100] h-20`}
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

          <Box className="hidden md:flex items-center gap-10 relative">
            {navLinks.map((link, idx) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    setServicesOpen(true);
                    setHoveredIndex(null);
                  }}
                  onMouseLeave={() => {
                    setServicesOpen(false);
                    setHoveredIndex(null);
                  }}
                >
                  <span
                    className={`${navTextColor} text-base font-medium capitalize flex items-center gap-1 cursor-pointer`}
                  >
                    {link.label}
                    <KeyboardArrowDown />
                  </span>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-4 text-black z-50">
                      <div className="absolute top-7 left-8 -translate-y-full w-4 h-4 rotate-45 shadow-md -z-10 bg-white" />
                      <div
                        className="relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                        onMouseEnter={() => {
                          // Keeps submenu active
                        }}
                      >
                        <div
                          className={`bg-white border border-gray-300 shadow-lg rounded-md py-2 flex transition-all duration-200 ${hoveredIndex !== null && link.children[hoveredIndex]?.subMenu
                            ? 'min-w-[44rem] w-auto'
                            : 'min-w-40'
                            }`}
                        >
                          <ul className="flex flex-col gap-2 p-2 w-48 shrink-0">
                            {link.children.map((item, i) => (
                              <li
                                key={i}
                                className="w-full text-nowrap"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onClick={() => setServicesOpen(prev => !prev)}
                              >
                                <Link
                                  href={item.href}
                                  className="p-2 hover:bg-blue-100 w-full flex justify-between gap-2 items-center rounded-2xl transition-all"
                                >
                                  {item.label}
                                  {item.subMenu && hoveredIndex === i && <East fontSize="small" />}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {hoveredIndex !== null &&
                            link.children[hoveredIndex]?.subMenu &&
                            submenuVisible && (
                              <>
                                <div className="border-l border-gray-400 h-auto mx-2" />
                                <div className="px-2">
                                  {(() => {
                                    const subMenuItems = link.children[hoveredIndex].subMenu;
                                    const grouped = subMenuItems.reduce((acc: Record<string, typeof subMenuItems>, item) => {
                                      const type = item.type || 'Other';
                                      if (!acc[type]) acc[type] = [];
                                      acc[type].push(item);
                                      return acc;
                                    }, {});

                                    return (
                                      <div className="flex flex-col gap-3">
                                        {Object.entries(grouped).map(([type, items], index, arr) => (
                                          <div key={type}>
                                            <Link
                                              href={type === 'Domestic' ? '/services/pet-relocation/India' : '/services/pet-relocation'}
                                              className="font-semibold text-base mb-1"
                                            >
                                              {type}
                                            </Link>
                                            {type === 'Packer-mover' && <p className='my-1 mt-3 mx-2'>Cities</p>}
                                            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
                                              {items.map((sub, i) => (
                                                <li
                                                  key={i}
                                                  onClick={() => setServicesOpen(prev => !prev)}
                                                  className="px-2 py-1 text-sm cursor-pointer"
                                                >
                                                  <Link href={sub.href} className="hover:underline">
                                                    {sub.label}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                            {arr.length > 1 && index < arr.length - 1 && (
                                              <Divider className="mt-2 bg-black -mb-2" />
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  })()}
                                </div>
                              </>
                            )}
                        </div>
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

          <div
            className="relative max-md:hidden"
            onMouseEnter={() => setSignUpOpen(true)}
            onMouseLeave={() => setSignUpOpen(false)}
          >
            <Button
              className={`${pathname === '/'
                ? `text-white bg-[${palette.primary.main}] hover:opacity-80`
                : 'bg-white text-primary hover:bg-gray-100'
                } capitalize py-2 px-6 rounded-full font-bold`}
              endIcon={<KeyboardArrowDown className="h-7 w-7" />}
            >
              Sign In
            </Button>
            <div className="pt-2">
              {signUpOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                  {signupLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      target='_blank'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <IconButton
            color={pathname === '/' ? 'primary' : 'inherit'}
            aria-label="open drawer"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
           <Image src={pathname === '/' ? '/icons/menu-black.svg':'/icons/menu-white.svg'} alt='menu' height={25} width={25} className='mr-1' />
          </IconButton>
        </Toolbar>
      </Container>

      <MobileDrawer
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navLinks={navLinks}
        signupLinks={signupLinks}
      />
    </AppBar>
  );
};

export default Navbar;