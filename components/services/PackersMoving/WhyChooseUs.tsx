"use client";
import { Box, Typography, Paper, useTheme, Container } from '@mui/material';
import { Brightness1, East } from '@mui/icons-material';

const features = [
   {
      title: 'Customer-First Approach',
      description: 'Safe and seamless moving for apartments, villas, and independent homes.',
      highlighted: false,
   },
   {
      title: 'Verified Results',
      description: 'With 10000+ successful relocations and 4.8+ average ratings across platforms, our results speak louder than promises.',
      highlighted: true,
   },
   {
      title: 'Trusted by Families & Corporates Worldwide',
      description: 'Join 1.5 lakh+ families and 150+ corporate clients who rely on our expert-driven relocation services for a smooth and secure move.',
      highlighted: false,
   },
   {
      title: 'All-in-One Relocation Platform',
      description: 'Access 8+ Relocation Services across 50+ countries, offering a seamless and convenient moving experience under one platform.',
      highlighted: false,
   },
   {
      title: 'Transparent pricing',
      description: 'No hidden charges, Instant Quotes.',
      highlighted: false,
   },
   {
      title: 'Ticket-based resolution',
      description: 'System, ensuring responses within 72 hours.',
      highlighted: false,
   },
];

const WhyChooseUs = () => {
   const { palette } = useTheme();
   return (
      <section className="bg-[#F5F7FB] py-20 px-6 lg:px-24">
         <Container maxWidth='lg' >
            <div className="text-center mb-10">
               <span className="text-xs font-medium bg-blue-100 px-3 py-1 rounded-full" style={{ color: palette.primary.main }}>
                  Why Choose us
               </span>
               <Typography variant="h4" component="h2" className="font-bold mt-4 text-gray-900">
                  Why Choose Us for <span className="" style={{ color: palette.primary.main }}>Packers & Moving</span>
               </Typography>
            </div>

            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {features.map((item, index) => (
                  <Paper
                     key={index}
                     elevation={0}
                     className={`rounded-xl p-6 flex flex-col justify-between h-full transition-all ${item.highlighted
                        ? `bg-[${palette.primary.main}] text-white shadow-md`
                        : 'bg-white text-gray-900 hover:shadow-md'
                        }`}
                  >
                     <div className="flex-1">
                        <Typography variant="h6" className={`font-semibold mb-2 ${item.highlighted ? 'text-white' : 'text-gray-900'}`}>
                           {item.title}
                        </Typography>
                        <Typography variant="body2" className={`text-sm ${item.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                           {item.description}
                        </Typography>
                     </div>

                     <div className="flex items-center justify-between mt-6">
                        <Brightness1
                           fontSize="large"
                           className={`rounded p-2 ${!item.highlighted
                              ? `text-white bg-[${palette.primary.main}]`
                              : `text-[${palette.primary.main}] bg-white`
                              }`}
                           color='primary'
                        />
                        <East className={item.highlighted ? 'text-white' : 'text-gray-700'} />
                     </div>
                  </Paper>
               ))}
            </Box>
         </Container>
      </section>
   );
};

export default WhyChooseUs;
