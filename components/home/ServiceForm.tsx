"use client";
import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  useTheme,
  Autocomplete,
  Popper
} from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import axios from 'axios';
import debounce from 'lodash.debounce';
import ServiceTabs from './form/ServiceTabs';
import { LocationOn } from '@mui/icons-material';

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

const ServiceForm = () => {
  const { palette } = useTheme();

  const [formData, setFormData] = useState<FormData>({
    service: 'packingAndMoving',
    locationType: "international",
    shifting_from: '',
    shifting_to: '',
    shifting_date: null,
  });

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedFrom, setSelectedFrom] = useState<Suggestion | null>(null);
  const [selectedTo, setSelectedTo] = useState<Suggestion | null>(null);

  const fetchSuggestions = debounce(async (search: string) => {
    if (search.length < 4) return;
    try {
      const { data } = await axios.get(
        'https://dashboard.happylocate.com/swift/api/v1/geographical_places/autocomplete',
        { params: { search_string: search } }
      );
      setSuggestions(data.autocomplete_suggestions || []);
    } catch (error) {
      console.error("Autocomplete fetch error", error);
    }
  }, 300);

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

  return (
    <div className="absolute w-[93%] lg:w-full z-40 bg-white shadow-lg border border-gray-300 rounded-xl">
      <div className="p-6 px-7 overflow-x-scroll no-scrollbar max-lg:mr-5">
        <ServiceTabs
          value={formData.service}
          onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
        />
      </div>
      <Divider />
      <div className="text-gray-600">
        <Box className="flex flex-col lg:flex-row items-end gap-4 p-3 px-8 pb-5 bg-white shadow-sm rounded-lg overflow-x-auto whitespace-nowrap">
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
              <FormControlLabel value="domestic" control={<Radio />} label={<span className='lg:text-[10px]'>Domestic</span>} />
              <FormControlLabel value="international" control={<Radio />} label={<span className='lg:text-[10px]'>International</span>} />
            </RadioGroup>
          </div>

          <Divider orientation="vertical" flexItem />

          {/* From & To Autocomplete */}
          {inputList.map((item, i) => (
            <React.Fragment key={item.name}>
              <div className="flex flex-col justify-end lg:py-2 max-lg:w-full">
                <label htmlFor={item.name} className='font-semibold text-sm text-gray-800 pb-1'>
                  {item.label}
                </label>
                <Autocomplete
                  freeSolo
                  options={suggestions}
                  getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.place_name
                  }
                  inputValue={formData[item.name] as string}
                  onInputChange={(event, value, reason) => {
                    setFormData(prev => ({ ...prev, [item.name]: value }));
                    fetchSuggestions(value);
                    if (reason === 'clear') {
                      if (item.name === 'shifting_from') setSelectedFrom(null);
                      else if (item.name === 'shifting_to') setSelectedTo(null);
                    }
                  }}
                  onChange={(event, newValue) => {
                    if (!newValue || typeof newValue === 'string') return;
                    setFormData(prev => ({ ...prev, [item.name]: newValue.place_name }));
                    if (item.name === 'shifting_from') setSelectedFrom(newValue);
                    else if (item.name === 'shifting_to') setSelectedTo(newValue);
                  }}
                  PopperComponent={CustomPopper}
                  renderOption={(props, option) => {
                    const [bold, ...rest] = option.place_name.split(',');
                    return (
                      <li {...props} className="flex items-start gap-2 px-3 py-1.5">
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
              slotProps={{
                textField: {
                  placeholder: "Choose Dates",
                  variant: "filled",
                  fullWidth: true,
                  className: "bg-gray-100 rounded-md min-w-[180px]",
                  InputProps: {
                    disableUnderline: true,
                    classes: { root: "h-10 flex items-center pb-4" },
                  },
                  slotProps: { input: { className: "pl-3" } },
                },
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
    </div>
  );
};

export default ServiceForm;
