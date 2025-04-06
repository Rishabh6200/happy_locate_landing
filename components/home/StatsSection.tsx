'use client'

import { Typography, useTheme, Card, CardContent } from '@mui/material'

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
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
               <Card
                  key={idx}
                  elevation={0}
                  className="bg-gray-100 rounded-xl text-center w-full sm:w-72 h-40 mx-auto"
               >
                  <CardContent className="flex flex-col justify-center h-full">
                     <Typography
                        variant="h5"
                        className="!font-bold"
                        style={{ color: palette.primary.main }}
                     >
                        {stat.value}
                     </Typography>
                     <Typography
                        variant="body2"
                        className="!text-gray-700 mt-1"
                     >
                        {stat.label}
                     </Typography>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default StatsSection
