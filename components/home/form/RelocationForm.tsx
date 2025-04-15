import { CalendarToday, LocationOn } from '@mui/icons-material';
import {
   Autocomplete,
   Box,
   Button,
   debounce,
   Divider,
   FormControlLabel,
   Popper,
   Radio,
   RadioGroup,
   TextField,
   useTheme
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { ChangeEvent, useState } from 'react';

const CustomPopper = (props: any) => (
   <Popper
      {...props}
      style={{ width: props.anchorEl?.clientWidth }}
      placement="bottom-start"
   />
);

type FormData = {
   service: string;
   locationType: string;
   shifting_from: string;
   shifting_to: string;
   shifting_date: Date | null;
};

type Suggestion = {
   place_id: string;
   place_name: string;
};

const inputList: { label: string; name: keyof FormData }[] = [
   { label: "Shifting From?", name: "shifting_from" },
   { label: "Shifting To?", name: 'shifting_to' },
];

const RelocationForm = ({ selectedTab }: { selectedTab: string }) => {
   const [formData, setFormData] = useState<FormData>({
      service: selectedTab,
      locationType: "domestic",
      shifting_from: '',
      shifting_to: '',
      shifting_date: null,
   });

   const [suggestionsFrom, setSuggestionsFrom] = useState<Suggestion[]>([]);
   const [suggestionsTo, setSuggestionsTo] = useState<Suggestion[]>([]);
   const [selectedFrom, setSelectedFrom] = useState<Suggestion | null>(null);
   const [selectedTo, setSelectedTo] = useState<Suggestion | null>(null);

   const fetchSuggestions = debounce(
      async (search: string, field: 'shifting_from' | 'shifting_to') => {
         if (search.length < 4) return;
         try {
            const { data } = await axios.get(
               'https://dashboard.happylocate.com/swift/api/v1/geographical_places/autocomplete',
               { params: { search_string: search } }
            );
            const results = data.autocomplete_suggestions || [];

            if (field === 'shifting_from') {
               setSuggestionsFrom(results);
            } else {
               setSuggestionsTo(results);
            }
         } catch (error) {
            console.error("Autocomplete fetch error", error);
         }
      },
      300
   );

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleDateChange = (date: dayjs.Dayjs | null) => {
      setFormData((prev) => ({ ...prev, shifting_date: date ? date.toDate() : null }));
   };

   const handleSubmit = () => {
      const { service, shifting_date } = formData;

      if (!selectedFrom || !selectedTo || !shifting_date) {
         alert("Please select valid locations and date.");
         return;
      }

      const params = new URLSearchParams({
         fromCity: selectedFrom.place_name,
         fromCityPlaceId: selectedFrom.place_id,
         toCity: selectedTo.place_name,
         toCityPlaceId: selectedTo.place_id,
         toDate: dayjs(shifting_date).format('YYYY-MM-DD'),
      });

      let redirectUrl = '';

      switch (service) {
         case 'packingAndMoving':
         case 'vehicleShifting':
         case 'storage':
            redirectUrl = `https://dashboard.happylocate.com/swift-app/relocations/pam-basic-details?${params}`;
            break;
         case 'petRelocation':
         case 'petTaxi':
            redirectUrl = `https://dashboard.happylocate.com/swift-app/relocations/pet-basic-details?${params}`;
            break;
         default:
            alert('Unknown service type.');
            return;
      }

      window.location.href = redirectUrl;
   };

   const { palette } = useTheme();

   return (
      <div className="text-gray-600">
         <Box className="flex flex-col lg:flex-row items-end gap-3 p-3 px-2 md:pl-5 pb-5 bg-white shadow-sm rounded-lg overflow-x-auto whitespace-nowrap">
            {/* Location Type */}
            <div className="flex flex-col justify-end max-lg:w-full">
               <span className="font-semibold text-sm text-gray-800 pb-1">Where?</span>
               <RadioGroup
                  row
                  name="locationType"
                  value={formData.locationType}
                  onChange={handleInputChange}
                  className="flex"
               >
                  <FormControlLabel value="domestic" control={<Radio />} label={<span className='lg:text-sm'>Domestic</span>} />
                  <FormControlLabel value="international" control={<Radio />} label={<span className='lg:text-sm'>International</span>} />
               </RadioGroup>
            </div>

            <Divider orientation="vertical" flexItem />

            {/* Autocomplete Fields */}
            {inputList.map((item, i) => (
               <React.Fragment key={item.name}>
                  <div className="flex flex-col justify-end lg:py-2 max-lg:w-full">
                     <label htmlFor={item.name} className='font-semibold text-sm text-gray-800 pb-1'>
                        {item.label}
                     </label>
                     <Autocomplete
                        freeSolo
                        options={item.name === 'shifting_from' ? suggestionsFrom : suggestionsTo}
                        getOptionLabel={(option) =>
                           typeof option === 'string' ? option : option.place_name
                        }
                        inputValue={formData[item.name] as string}
                        onInputChange={(event, value, reason) => {
                           setFormData(prev => ({ ...prev, [item.name]: value }));
                           if (item.name === 'shifting_from' || item.name === 'shifting_to') {
                              fetchSuggestions(value, item.name);
                           }
                           if (reason === 'clear') {
                              if (item.name === 'shifting_from') setSelectedFrom(null);
                              else setSelectedTo(null);
                           }
                        }}
                        onChange={(event, newValue) => {
                           if (!newValue || typeof newValue === 'string') return;
                           setFormData(prev => ({ ...prev, [item.name]: newValue.place_name }));
                           if (item.name === 'shifting_from') setSelectedFrom(newValue);
                           else setSelectedTo(newValue);
                        }}
                        PopperComponent={CustomPopper}
                        renderOption={(props, option) => {
                           const [bold, ...rest] = option.place_name.split(',');
                           const { key, ...restProps } = props;
                           return (
                              <li key={key} {...restProps} className="flex items-start gap-2 px-3 py-1.5">
                                 <LocationOn fontSize="small" className="mt-1 text-gray-500" />
                                 <div className="text-sm leading-tight">
                                    <span className="font-semibold">{bold.trim()}</span>
                                    {rest.length > 0 && (
                                       <span className="text-gray-500">,{rest.join(',')}</span>
                                    )}
                                 </div>
                              </li>
                           );
                        }}
                        renderInput={(params) => (
                           <TextField
                              {...params}
                              variant="filled"
                              placeholder={item.label}
                              className="bg-gray-100 rounded-md min-w-[180px]"
                              InputProps={{
                                 ...params.InputProps,
                                 disableUnderline: true,
                                 className: 'h-10 p-1 items-center',
                              }}
                           />
                        )}
                     />
                  </div>
                  {i !== inputList.length - 1 && <Divider orientation="vertical" flexItem />}
               </React.Fragment>
            ))}

            <Divider orientation="vertical" flexItem />

            {/* Date Picker */}
            <div className="flex flex-col justify-end lg:py-2 max-lg:w-full">
               <label htmlFor="shifting_date" className='font-semibold text-sm text-gray-800 pb-1'>Shifting Date</label>
               <DatePicker
                  value={formData.shifting_date ? dayjs(formData.shifting_date) : null}
                  onChange={handleDateChange}
                  className='lg:w-[220px]'
                  slotProps={{
                     textField: {
                        placeholder: "Choose Dates",
                        variant: "filled",
                        fullWidth: true,
                        className: "bg-gray-100 rounded-md",
                        InputProps: {
                           disableUnderline: true,
                           classes: { root: "h-10 flex items-center pb-4" },
                        },
                        slotProps: { input: { className: "pl-3" } },
                     },
                     openPickerButton: {
                        className: "mt-4"
                     }
                  }}
               />
            </div>

            <Divider orientation="vertical" flexItem />

            {/* Submit Button */}
            <div className="max-lg:w-full">
               <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  className="text-white rounded-md px-6 lg:py-2 lg:ml-2 lg:mb-2 normal-case shadow-none hover:opacity-80"
                  style={{ backgroundColor: palette.primary.main }}
               >
                  Submit
               </Button>
            </div>
         </Box>
      </div>
   );
};

export default RelocationForm;