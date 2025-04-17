'use client'

import { ExpandMore } from '@mui/icons-material'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Container,
   Typography,
} from '@mui/material'
import React from 'react'

type FAQ = {
   question: string
   answer?: string
}

type FAQProps = {
   faqs: FAQ[]
}

const FAQ = ({ faqs }: FAQProps) => {
   return (
      <section className="bg-[#F5F5F4] py-16" id='faq'>
         <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-white text-sm border rounded-full mb-2">
               FAQ&apos;s
            </div>
            <Typography variant="h4" className="font-bold text-black">
               Frequently asked questions
            </Typography>
         </div>

         <Container maxWidth="lg">
            {faqs.map((faq, index) => (
               <Accordion
                  key={index}
                  className="rounded-xl shadow-none border border-gray-200 !border-t-0 mb-4 bg-white"
                  elevation={0}
               >
                  <AccordionSummary
                     expandIcon={<ExpandMore />}
                     aria-controls={`panel${index}-content`}
                     id={`panel${index}-header`}
                  >
                     <Typography className="text-black font-medium text-base">
                        {faq.question}
                     </Typography>
                  </AccordionSummary>
                  {faq.answer && (
                     <AccordionDetails>
                        <Typography className="text-gray-600 text-sm leading-relaxed">
                           {faq.answer}
                        </Typography>
                     </AccordionDetails>
                  )}
               </Accordion>
            ))}
         </Container>
      </section>
   )
}

export default FAQ
