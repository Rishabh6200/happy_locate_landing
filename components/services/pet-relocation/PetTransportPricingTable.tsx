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
  fromCity: string;
  toDelhi: string;
  toBangalore: string;
  toMumbai: string;
  toHyderabad: string;
  toChennai: string;
  toPune: string;
  toKolkata: string;
};

type PetTransportPricingTableProps = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  data: PricingRow[];
};

const PetTransportPricingTable: React.FC<PetTransportPricingTableProps> = ({
  heading,
  description,
  image,
  imageAlt,
  data,
}) => {
  return (
    <section className="bg-white px-4 md:px-10 py-16">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <Typography variant="h5" component="h2" className="font-bold text-black text-2xl md:text-3xl mb-4">
            {heading.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          <Typography variant="body1" className="text-gray-700 leading-relaxed">
            {description}
          </Typography>
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
                    Cities
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Delhi
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Bangalore
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Mumbai
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Hyderabad
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Chennai
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Pune
                  </TableCell>
                  <TableCell className="text-sm text-gray-800 px-4 py-3 text-center">
                    Kolkata
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
                      {row.fromCity}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toDelhi}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toBangalore}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toMumbai}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toHyderabad}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toChennai}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toPune}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 text-center">
                      {row.toKolkata}
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

export default PetTransportPricingTable;