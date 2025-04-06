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

const faqs = [
   {
      question: 'What services does HappyLocate offer?',
      answer: '',
   },
   {
      question: 'Is my move insured?',
      answer:
         'Yes, all relocations booked through HappyLocate are insured. We offer comprehensive transit insurance to ensure your belongings are covered during the move.',
   },
   {
      question: 'Does HappyLocate provide international relocation services?',
      answer: '',
   },
   {
      question: 'Does HappyLocate serve corporate clients?',
      answer: '',
   },
   {
      question: 'How does HappyLocate ensure the quality of service providers?',
      answer: '',
   },
   {
      question: 'Is there a way to compare quotes from different vendors?',
      answer: '',
   },
   {
      question: 'What documents are required for relocation?',
      answer: '',
   },
]

const HomeFAQ = () => {
   return (
      <section className="bg-[#F5F5F4] py-16">
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

export default HomeFAQ
