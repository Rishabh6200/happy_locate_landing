import React from 'react';
import {
   Container,
   Typography,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   Button,
} from '@mui/material';

type TableRowData = {
   vetVisit: string;
   transport: string;
   airport: string;
};

type Props = {
   heading: string;
   data: TableRowData[];
};


const PetTable: React.FC<Props> = ({ heading, data }) => {
   return (
      <section className="bg-white px-4 md:px-10 py-16">
         <Container maxWidth="lg">
            {/* Heading and Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
               <Typography variant="h5" component="h2" className="font-bold text-black text-2xl md:text-3xl">
                  {heading}
               </Typography>

               <Button
                  variant="contained"
                  size="medium"
                  className="bg-[#1359D1] text-white font-semibold rounded-full px-6 py-2 capitalize hover:bg-[#0f4cb3] shadow-md"
               >
                  Book Now
               </Button>
            </div>

            {/* Table */}
            <TableContainer component={Paper} elevation={0} className="rounded-xl">
               <Table>
                  <TableHead className="bg-[#F5F7FB]">
                     <TableRow>
                        <TableCell className="text-sm font-semibold text-gray-800 px-4 py-3">Vet Visits</TableCell>
                        <TableCell className="text-sm font-semibold text-gray-800 px-4 py-3 text-center">
                           Average Transportation Charges
                        </TableCell>
                        <TableCell className="text-sm font-semibold text-gray-800 px-4 py-3 text-center">
                           Airport/Railways
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-gray-100">
                           <TableCell className="px-4 py-4 text-sm text-gray-800">{row.vetVisit}</TableCell>
                           <TableCell className="px-4 py-4 text-sm text-gray-600 text-center">{row.transport}</TableCell>
                           <TableCell className="px-4 py-4 text-sm text-gray-600 text-center">{row.airport}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Container>
      </section>
   );
};

export default PetTable