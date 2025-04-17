'use client'

import { Typography, useTheme, Card, CardContent, Container } from '@mui/material'

const stats = [
   {
      value: '10+',
      label: 'Years of Experience',
   },
   {
      value: '7+',
      label: 'Relocation Services',
   },
   {
      value: '5K',
      label: 'Satisfied Customers',
   },
]

const StatsSection = () => {
   const { palette } = useTheme()

   return (
      <div className="py-10 bg-white">
         <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:p-0">
            {stats.map((stat, idx) => (
               <Card
                  key={idx}
                  elevation={0}
                  className="bg-gray-100 rounded-xl text-center w-full h-40 mx-auto"
               >
                  <CardContent className="flex flex-col justify-center h-full">
                     <Typography
                        variant="h3"
                        className="!font-bold"
                        style={{ color: palette.primary.main }}
                     >
                        {stat.value}
                     </Typography>
                     <Typography
                        variant='body1'
                        className="!text-gray-700 mt-1"
                     >
                        {stat.label}
                     </Typography>
                  </CardContent>
               </Card>
            ))}
         </Container>
      </div>
   )
}

export default StatsSection
