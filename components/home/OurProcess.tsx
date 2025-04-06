"use client";
import { Container, Typography, useTheme, Card, CardContent, } from '@mui/material'
import Image from 'next/image'

const steps = [
   {
      title: 'Request a Quote',
      description: 'Get an instant, customized quote by providing your move details and preferences for an accurate estimate.',
      active: true,
   },
   {
      title: 'Confirm Your Booking',
      description: 'Review and confirm your booking with flexible scheduling options that suit your needs and timeline.',
   },
   {
      title: 'Relax While We Handle the Move',
      description: 'Sit back and relax while our expert team efficiently packs, transports, and manages every detail with care.',
   },
   {
      title: 'Delivery and Setup',
      description: 'Enjoy a hassle-free experience as we deliver your items on time and set them up perfectly in your new space.',
   },
];

const OurProcessSteps = () => {
   return (
      <div className="pt-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
               <Card
                  key={index}
                  elevation={0}
                  className={`${step.active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'} rounded-xl`}
               >
                  <CardContent className="flex items-start gap-4 p-6">
                     <div
                        className={`w-14 aspect-square rounded-full flex items-center justify-center text-lg font-bold bg-white ${step.active ? ' text-blue-600' : ' text-black'
                           }`}
                     >
                        {index + 1}
                     </div>

                     <div>
                        <Typography
                           variant="subtitle1"
                           className={`!font-semibold ${step.active ? '!text-white' : '!text-black'}`}
                        >
                           {step.title}
                        </Typography>
                        <Typography
                           variant="body2"
                           className={`${step.active ? '!text-white' : '!text-gray-600'}`}
                        >
                           {step.description}
                        </Typography>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   );
};


const OurProcess = () => {
   const { palette } = useTheme();
   return (
      <Container maxWidth="lg" className='py-16'>
         <div className="relative h-[65vh] w-full rounded-xl overflow-hidden">
            <Image
               src="/images/man-taking-box.png"
               alt="image"
               fill
               className="object-cover object-top"
            />
            <div className="absolute bottom-10 left-10">
               <span className='text-white rounded-xl px-4 py-1 text-sm' style={{ backgroundColor: palette.primary.main }} >Our Process</span>
               <Typography variant='h5' className='font-extrabold text-white mt-5' >Effortless Relocation, Guaranteed</Typography>
            </div>
         </div>
         <div className="">
            <OurProcessSteps />
         </div>
      </Container>
   )
}

export default OurProcess
