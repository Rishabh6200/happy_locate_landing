import {
   Drawer,
   List,
   ListItem,
   ListItemText,
   Collapse,
   IconButton,
   Button,
} from '@mui/material';
import { Close, Add, Remove } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface SubMenuItem {
   label: string;
   href: string;
}

interface NavChildItem {
   label: string;
   href: string;
   subMenu?: SubMenuItem[];
}

interface NavLink {
   label: string;
   href?: string;
   children?: NavChildItem[];
}

interface MobileDrawerProps {
   mobileOpen: boolean;
   setMobileOpen: (open: boolean) => void;
   navLinks: NavLink[];
   signupLinks: {
      label: string;
      href: string;
   }[]
}

const MobileDrawer = ({ mobileOpen, setMobileOpen, navLinks, signupLinks }: MobileDrawerProps) => {
   const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
   const [showSignupLinks, setShowSignupLinks] = useState(false);

   const toggleMenu = (label: string) => {
      setOpenMenus((prev) => ({
         ...prev,
         [label]: !prev[label],
      }));
   };

   return (
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} className="md:hidden">
         <div className="w-[300px] bg-white h-full flex flex-col">
            {/* Logo and Close Icon */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1359D1]">
               <Image src="/images/white-logo.png" alt="HappyLocate" width={120} height={30} />
               <IconButton onClick={() => setMobileOpen(false)}>
                  <Close className="text-white" />
               </IconButton>
            </div>

            {/* Navigation List */}
            <List>
               {navLinks.map((link) => (
                  <div key={link.label}>
                     {!link.children ? (
                        <ListItem
                           component={Link}
                           href={link.href ?? '#'}
                           onClick={() => setMobileOpen(false)}
                           className="text-black"
                        >
                           <ListItemText primary={link.label} />
                        </ListItem>
                     ) : (
                        <>
                           <ListItem
                              component={link.href ? (Link as React.ElementType) : 'div'}
                              href={link.href}
                              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                 if (!link.href) e.preventDefault();
                                 if (link.href) setMobileOpen(false);
                              }}
                              className="text-black justify-between"
                           >
                              <ListItemText primary={link.label} />
                              <IconButton
                                 edge="end"
                                 size="small"
                                 onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.stopPropagation();
                                    e.preventDefault(); // prevent drawer close on toggle
                                    toggleMenu(link.label);
                                 }}
                              >
                                 {openMenus[link.label] ? <Remove /> : <Add />}
                              </IconButton>
                           </ListItem>

                           <Collapse in={openMenus[link.label]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding className="pl-4">
                                 {link.children.map((child) => (
                                    <div key={child.label}>
                                       <ListItem
                                          component={child.href ? (Link as React.ElementType) : 'div'}
                                          href={child.href}
                                          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                             if (!child.href) e.preventDefault();
                                             setMobileOpen(false)
                                          }}
                                          className="text-black justify-between"
                                       >
                                          <ListItemText primary={child.label} />
                                          {child.subMenu && (
                                             <IconButton
                                                edge="end"
                                                size="small"
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                   e.stopPropagation();
                                                   e.preventDefault(); // prevent drawer close
                                                   toggleMenu(child.label);
                                                }}
                                             >
                                                {openMenus[child.label] ? <Remove /> : <Add />}
                                             </IconButton>
                                          )}
                                       </ListItem>

                                       {child.subMenu && (
                                          <Collapse in={openMenus[child.label]} timeout="auto" unmountOnExit>
                                             <List component="div" disablePadding className="pl-4">
                                                {child.subMenu.map((sub) => (
                                                   <ListItem
                                                      key={sub.label}
                                                      component={Link}
                                                      href={sub.href}
                                                      onClick={() => setMobileOpen(false)}
                                                      className="text-black"
                                                   >
                                                      <ListItemText primary={sub.label} />
                                                   </ListItem>
                                                ))}
                                             </List>
                                          </Collapse>
                                       )}
                                    </div>
                                 ))}
                              </List>
                           </Collapse>
                        </>
                     )}
                  </div>
               ))}
            </List>

            <Button
               variant="contained"
               className="mx-5 my-2 flex justify-between items-center"
               onClick={() => setShowSignupLinks(!showSignupLinks)}
               endIcon={showSignupLinks ? <Remove /> : <Add />}
            >
               Sign In
            </Button>

            <Collapse in={showSignupLinks} timeout="auto" unmountOnExit>
               <List component="div" disablePadding className="pl-6">
                  {signupLinks.map((link) => (
                     <ListItem
                        key={link.label}
                        component={Link}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-black"
                     >
                        <ListItemText primary={link.label} />
                     </ListItem>
                  ))}
               </List>
            </Collapse>

         </div>
      </Drawer>
   );
};

export default MobileDrawer;
