'use client';

import React, { useState } from 'react';
import {
   TextField,
   Button,
   Box,
   Container,
   Autocomplete,
   Popper,
} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

type Suggestion = {
   place_id: string;
   place_name: string;
};

const CustomPopper = (props: any) => (
   <Popper {...props} style={{ zIndex: 1300 }} placement="bottom-start" />
);

const PetTaxiForm = () => {
   const [fromInput, setFromInput] = useState('');
   const [toInput, setToInput] = useState('');
   const [fromSuggestions, setFromSuggestions] = useState<Suggestion[]>([]);
   const [toSuggestions, setToSuggestions] = useState<Suggestion[]>([]);
   const [fromSelected, setFromSelected] = useState<Suggestion | null>(null);
   const [toSelected, setToSelected] = useState<Suggestion | null>(null);
   const [shiftingDate, setShiftingDate] = useState<string | undefined>();

   const fetchSuggestions = async (query: string, target: 'from' | 'to') => {
      if (query.length < 4) return;
      try {
         const res = await fetch(
            `https://dashboard.happylocate.com/swift/api/v1/geographical_places/autocomplete?search_string=${encodeURIComponent(query)}`
         );
         const data = await res.json();
         const suggestions = data?.autocomplete_suggestions || [];
         if (target === 'from') setFromSuggestions(suggestions);
         else setToSuggestions(suggestions);
      } catch (err) {
         console.error('Error fetching suggestions:', err);
      }
   };

   const handleSubmit = () => {
      if (!fromSelected || !toSelected || !shiftingDate) {
         alert('Please fill all fields');
         return;
      }

      const query = new URLSearchParams({
         fromCity: fromSelected.place_name,
         fromCityPlaceId: fromSelected.place_id,
         toCity: toSelected.place_name,
         toCityPlaceId: toSelected.place_id,
         toDate: dayjs(shiftingDate).format('YYYY-MM-DD'),
      });

      const url = `https://dashboard.happylocate.com/swift-app/relocations/pet-basic-details?${query.toString()}`;
      window.location.href = url;
   };

   const renderOption = (props: any, option: Suggestion) => {
      const [bold, ...rest] = option.place_name.split(',');
      return (
         <li {...props} className="flex items-start gap-2 px-3 py-1.5">
            <LocationOn fontSize="small" className="mt-1 text-gray-500" />
            <div className="text-sm leading-tight">
               <span className="font-semibold">{bold.trim()}</span>
               {rest.length > 0 && <span className="text-gray-500">,{rest.join(',')}</span>}
            </div>
         </li>
      );
   };

   return (
      <Container maxWidth="lg">
         <Box className="bg-white shadow-md rounded-2xl px-4 md:px-6 py-6 mx-auto -mt-20 z-10 relative w-full">
            <Box className="flex flex-col md:flex-row w-full gap-4 items-stretch md:items-end space-y-4 md:space-y-0">

               {/* From */}
               <Box className="flex flex-col flex-1 min-w-0">
                  <label className="text-sm font-semibold mb-1 text-gray-800">Shifting From?</label>
                  <Autocomplete
                     freeSolo
                     options={fromSuggestions}
                     inputValue={fromInput}
                     className='w-full'
                     getOptionLabel={(option) =>
                        typeof option === 'string' ? option : option.place_name
                     }
                     onInputChange={(e, val, reason) => {
                        setFromInput(val);
                        if (reason !== 'reset') fetchSuggestions(val, 'from');
                     }}
                     onChange={(e, val) => {
                        if (typeof val === 'string' || !val) return;
                        setFromSelected(val);
                        setFromInput(val.place_name);
                     }}
                     PopperComponent={CustomPopper}
                     renderOption={renderOption}
                     renderInput={(params) => (
                        <TextField
                           {...params}
                           variant="filled"
                           placeholder="Shifting From?"
                           className="bg-gray-100 rounded-md min-w-[180px]"
                           InputProps={{
                              ...params.InputProps,
                              disableUnderline: true,
                              className: 'h-10 p-1 items-center',
                           }}
                        />
                     )}
                  />
               </Box>

               {/* Divider */}
               <Box className="hidden md:block h-[56px] border-l border-gray-300 mx-2 self-end" />

               {/* To */}
               <Box className="flex flex-col flex-1 min-w-0">
                  <label className="text-sm font-semibold mb-1 text-gray-800">Shifting To?</label>
                  <Autocomplete
                     freeSolo
                     options={toSuggestions}
                     inputValue={toInput}
                     getOptionLabel={(option) =>
                        typeof option === 'string' ? option : option.place_name
                     }
                     onInputChange={(e, val, reason) => {
                        setToInput(val);
                        if (reason !== 'reset') fetchSuggestions(val, 'to');
                     }}
                     onChange={(e, val) => {
                        if (typeof val === 'string' || !val) return;
                        setToSelected(val);
                        setToInput(val.place_name);
                     }}
                     PopperComponent={CustomPopper}
                     renderOption={renderOption}
                     renderInput={(params) => (
                        <TextField
                           {...params}
                           variant="filled"
                           placeholder="Shifting To?"
                           className="bg-gray-100 rounded-md min-w-[180px]"
                           InputProps={{
                              ...params.InputProps,
                              disableUnderline: true,
                              className: 'h-10 p-1 items-center',
                           }}
                        />
                     )}
                  />
               </Box>

               {/* Divider */}
               <Box className="hidden md:block h-[56px] border-l border-gray-300 mx-2 self-end" />

               {/* Date Picker */}
               <Box className="flex flex-col flex-1 min-w-0">
                  <label htmlFor="shifting_date" className="font-semibold text-sm text-gray-800 pb-1">
                     Shifting Date
                  </label>
                  <DatePicker
                     value={shiftingDate ? dayjs(shiftingDate) : null}
                     onChange={(date) => setShiftingDate(date?.toISOString())}
                     slotProps={{
                        textField: {
                           placeholder: 'Choose Date',
                           variant: 'filled',
                           fullWidth: true,
                           className: 'bg-gray-100 rounded-md min-w-[180px]',
                           InputProps: {
                              disableUnderline: true,
                              classes: { root: 'h-10 flex items-center pb-4' },
                           },
                           slotProps: { input: { className: 'pl-3' } },
                        },
                        openPickerButton: {
                           className: "mt-4"
                        }
                     }}
                  />
               </Box>

               {/* Divider */}
               <Box className="hidden md:block h-[56px] border-l border-gray-300 mx-2 self-end" />

               {/* Button */}
               <Box className="flex flex-1 min-w-0 items-end">
                  <Button
                     variant="contained"
                     size="large"
                     onClick={handleSubmit}
                     className="bg-[#1359D1] text-white font-semibold rounded-md px-6 py-2 w-full capitalize hover:bg-[#0f4cb3] shadow-md"
                  >
                     Book Now
                  </Button>
               </Box>
            </Box>
         </Box>
      </Container>
   );
};

export default PetTaxiForm;