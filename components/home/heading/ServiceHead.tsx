"use client";
import { Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'

interface Props {
   heading: string;
   specialHeading?: string;
   className?: string;
}

const ServiceHead: FC<Props> = ({ heading, specialHeading, className }) => {
   const { palette } = useTheme();
   return (
      <div className="text-center mb-10">
         <span className="bg-white px-6 py-1 rounded-full text-black text-xl sm:text-sm font-semibold">Trusted by Thousands</span>
         <Typography variant="h4" className={`font-semibold max-sm:text-2xl mt-4 ${className}`}>
            {heading} <br className='sm:hidden' /> <span className="" style={{ color: palette.primary.main }}>{specialHeading}</span>
         </Typography>
      </div>
   )
}

export default ServiceHead