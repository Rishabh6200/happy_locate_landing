'use client';

import React from 'react';
import {
   Box,
   Container,
   Typography,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
} from '@mui/material';

type PricingRow = {
   propertyType: string;
   total: number;
   transport: number;
   packing: number;
   loading: number;
};

type PricingTableProps = {
   heading: string;
   description: string;
   data: PricingRow[];
};

const PricingTable: React.FC<PricingTableProps> = ({ heading, description, data }) => {
   return (
      <section className="bg-white px-4 md:px-10 py-16">
         <Container maxWidth="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
               <div>
                  <Typography variant="h5" component="h2" className="font-bold text-black text-2xl md:text-3xl">
                     {heading.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                           {line}
                           <br />
                        </React.Fragment>
                     ))}
                  </Typography>
               </div>
               <div>
                  <Typography variant="body1" className="text-gray-700 leading-relaxed">
                     {description}
                  </Typography>
               </div>
            </div>

            <div className="w-full overflow-x-auto">
               <TableContainer
                  component={Paper}
                  className="min-w-full border-gray-100"
                  elevation={0}
               >
                  <Table className="min-w-full">
                     <TableHead className="bg-[#F5F7FB] rounded-2xl">
                        <TableRow>
                           <TableCell className="text-sm font-semibold text-gray-800 px-4 py-3">
                              Property Type
                           </TableCell>
                           <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                              Total Average Estimated Charges
                           </TableCell>
                           <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                              Average Transportation Charges
                           </TableCell>
                           <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                              Average Packing & Unpacking Charges
                           </TableCell>
                           <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                              Average Loading & Unloading Charges
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {data.map((row, idx) => (
                           <TableRow
                              key={idx}
                              className="hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                           >
                              <TableCell className="px-4 py-4 text-sm text-gray-800">
                                 {row.propertyType}
                              </TableCell>
                              <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                                 {row.total}
                              </TableCell>
                              <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                                 {row.transport}
                              </TableCell>
                              <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                                 {row.packing}
                              </TableCell>
                              <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                                 {row.loading}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </div>

         </Container>
      </section>
   );
};

export default PricingTable;
