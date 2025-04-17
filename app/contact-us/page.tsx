import ContactForm from '@/components/contact-us/ContactForm'
import Header from '@/components/contact-us/Header'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
   title: 'Contact Us | HM',
};

const Page = () => {
   return (
      <>
         <Header />
         <ContactForm />
      </>
   )
}

export default Page