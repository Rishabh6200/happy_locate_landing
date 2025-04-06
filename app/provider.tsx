"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React, { FC, ReactNode } from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material'

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </AppRouterCacheProvider>
   )
}

export default Provider