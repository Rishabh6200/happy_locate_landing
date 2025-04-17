"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import React, { FC, ReactNode } from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               {children}
            </LocalizationProvider>
         </ThemeProvider>
      </AppRouterCacheProvider>
   )
}

export default Provider