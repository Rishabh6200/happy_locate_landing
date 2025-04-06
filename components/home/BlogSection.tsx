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

const blogPosts = [
   {
      image: '/images/blog-one.svg',
      title: 'Office Relocation: How to Plan for a Smooth Transition and Success',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.'
   },
   {
      image: '/images/blog-two.svg',
      title: 'Office Relocation: How to Plan for a Smooth Transition and Success',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.'
   },
   {
      image: '/images/blog-three.svg',
      title: 'Office Relocation: How to Plan for a Smooth Transition and Success',
      description:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.'
   }
];

const BlogSection = () => {
   const { palette } = useTheme();

   return (
      <section className="w-full bg-white relative min-h-[80rem] sm:min-h-[60rem] md:min-h-screen lg:min-h-[80vh]">
         {/* Header */}
         <div
            className="text-white text-center py-10 px-4"
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
                     endIcon={
                        <ArrowOutward
                           className="h-8 w-8 p-1 -mr-2 rounded-full text-white"
                           style={{
                              backgroundColor: palette.primary.main
                           }}
                        />
                     }
                  >
                     View More
                  </Button>
               </div>
            </Container>
         </div>

         {/* Blog Cards */}
         <div className="absolute top-32 w-full py-12 px-4 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
               {blogPosts.map((post, index) => (
                  <Card
                     key={index}
                     className="w-full max-w-[300px] h-[320px] flex flex-col shadow-md rounded-2xl overflow-hidden mx-auto"
                  >
                     <CardMedia
                        component="img"
                        image={post.image}
                        alt="Blog image"
                        className="h-[180px] w-full object-cover"
                     />
                     <CardContent className="flex-grow overflow-hidden px-4 py-2">
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
            <div className="flex justify-center my-5 sm:hidden">
               <Button
                  variant="contained"
                  size="medium"
                  className="absolute rounded-full px-6 gap-2 capitalize font-bold text-lg"
                  style={{ backgroundColor: palette.primary.main }}
               >
                  View More
               </Button>
            </div>
         </div>
      </section>
   );
};

export default BlogSection;
