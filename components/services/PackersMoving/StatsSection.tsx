'use client';
import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';

type Stat = {
   value: string;
   label: string;
};

type StatsSectionProps = {
   stats: Stat[];
};

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
   const { palette } = useTheme();
   return (
      <section className="w-full bg-white py-10 px-4">
         <Container maxWidth='lg' className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto">
            {stats.map((stat, index) => (
               <Box
                  key={index}
                  className="flex flex-col items-center justify-center rounded-2xl bg-[#F5F7FA] p-6 py-12 shadow-sm text-center"
               >
                  <Typography variant="h4" className="font-bold" style={{ color: palette.primary.main }}>
                     {stat.value}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-1 text-sm">
                     {stat.label}
                  </Typography>
               </Box>
            ))}
         </Container>
      </section>
   );
};

export default StatsSection;
