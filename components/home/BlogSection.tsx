"use client";
import React from 'react';
import {
   useTheme,
   Card,
   CardContent,
   CardMedia,
   Typography,
   Button,
   Container
} from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import Link from 'next/link';

const blogPosts = [
   {
      image: '/images/blog-one.svg',
      title: 'Pet Relocation: Microchipping, Titer Testing, and Vaccination',
      description: 'Pet relocation, whether domestic or international, has some requirements and careful planning. Understanding titer testing, vaccination, and microchipping rules and regulations...',
   },
   {
      image: '/images/blog-two.svg',
      title: 'Revolutionising the Landscape: Technology in Commercial Moving',
      description: 'Modern technology advancements are changing the face of the commercial moving sector and bringing about a significant transition. Businesses are adopting...'
   },
   {
      image: '/images/blog-three.svg',
      title: 'Guide to Choosing the Perfect Airline Approved Travel Pet Crate.',
      description: 'Pet relocation is an exciting experience, but ensuring safety is the most important aspect. One key safety measure is choosing the right...'
   }
];

const BlogSection = () => {
   const { palette } = useTheme();

   return (
      <section className="w-full bg-white relative py-12">
         {/* Header */}
         <div
            className="text-white text-center py-16 px-4"
            style={{ backgroundColor: palette.primary.main }}
         >
            <Container
               maxWidth="lg"
               className="flex flex-col md:flex-row justify-between min-h-[35vh]"
            >
               <div className="sm:text-start text-center">
                  <h2 className="text-3xl font-bold">Our Blogs</h2>
                  <p className="text-sm mt-2">Latest updates and insights.</p>
               </div>
               <div className="mt-4 md:mt-0">
                  <Button
                     variant="contained"
                     size="medium"
                     className="rounded-full px-6 gap-2 capitalize font-bold bg-white max-sm:hidden"
                     style={{ color: palette.primary.main }}
                     LinkComponent={Link}
                     href="https://www.happylocate.com/blog"
                     target="_blank"
                     endIcon={
                        <ArrowOutward
                           className="h-8 w-8 p-1 -mr-2 rounded-full text-white"
                           style={{ backgroundColor: palette.primary.main }}
                        />
                     }
                  >
                     View More
                  </Button>
               </div>
            </Container>
         </div>

         {/* Blog Cards Grid */}
         <Container maxWidth="lg" className="-mt-44">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
               {blogPosts.map((post, index) => (
                  <Card
                     key={index}
                     className="w-full max-w-[360px] flex flex-col shadow-md rounded-2xl overflow-hidden mx-auto p-0.5"
                  >
                     <CardMedia
                        component="img"
                        image={post.image}
                        alt="Blog image"
                        className="h-[250px] w-full object-cover rounded-tr-2xl rounded-tl-2xl"
                     />
                     <CardContent className="flex-grow overflow-hidden px-4 py-4">
                        <Typography
                           gutterBottom
                           variant="h6"
                           component="div"
                           className="font-semibold text-base leading-tight mb-1 text-black py-2"
                        >
                           {post.title}
                        </Typography>
                        <Typography
                           variant="body2"
                           color="text.secondary"
                           className="text-sm text-gray-600"
                        >
                           {post.description}
                        </Typography>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* View More Button (for small screens) */}
            <div className="flex justify-center my-8 sm:hidden">
               <Button
                  LinkComponent={Link}
                  href="https://www.happylocate.com/blog"
                  target="_blank"
                  variant="contained"
                  size="medium"
                  className="rounded-full px-6 gap-2 capitalize font-bold text-lg"
                  style={{ backgroundColor: palette.primary.main }}
               >
                  View More
               </Button>
            </div>
         </Container>
      </section>

   );
};

export default BlogSection;
