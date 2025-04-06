"use client";
import React, { useState } from 'react';
import { 
  Card, 
  Tabs, 
  Tab,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PetsIcon from '@mui/icons-material/Pets';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InventoryIcon from '@mui/icons-material/Inventory';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportIcon from '@mui/icons-material/Support';

const services = [
  { label: 'Packing & Moving', icon: <LocalShippingIcon fontSize="small" /> },
  { label: 'Pet Relocation', icon: <PetsIcon fontSize="small" /> },
  { label: 'Pet Taxi', icon: <AirportShuttleIcon fontSize="small" /> },
  { label: 'Storage', icon: <InventoryIcon fontSize="small" /> },
  { label: 'Vehicle Shifting', icon: <DirectionsCarIcon fontSize="small" /> },
  { label: 'Support Services', icon: <SupportIcon fontSize="small" /> }
];

const additionalServices = [
  'Visa',
  'Flight',
  'Hotel',
  'House Search Assistance',
  'Home Interiors',
  'Short Stays',
  'Cabs'
];

const ServiceForm = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedAdditional, setSelectedAdditional] = useState('Flight');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shiftingFrom: '',
    shiftingTo: '',
    comment: ''
  });

  const handleServiceChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedService(newValue);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedService, selectedAdditional, ...formData });
  };

  return (
    <div className="relative w-full">
      <Card className="absolute top-[-2.5rem] z-40 w-full shadow-sm">
        <div className="p-6">
          {/* Service Tabs */}
          <div className="w-full overflow-x-auto mb-6">
            <Tabs
              value={selectedService}
              onChange={handleServiceChange}
              variant="scrollable"
              scrollButtons="auto"
              className="min-w-fit inline-flex border border-gray-200 rounded-lg bg-white"
              TabIndicatorProps={{ style: { display: 'none' } }}
            >
              {services.map((service, index) => (
                <Tab
                  key={index}
                  icon={service.icon}
                  iconPosition="start"
                  label={service.label}
                  className={`min-h-[40px] px-4 py-2 text-sm font-medium transition-all duration-200 
                    ${selectedService === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'} 
                    ${index === 0 ? 'rounded-l-lg' : ''} 
                    ${index === services.length - 1 ? 'rounded-r-lg' : ''} 
                    border-r border-gray-200 last:border-r-0`}
                />
              ))}
            </Tabs>
          </div>

          {/* Additional Services Radio Group */}
          <FormControl component="fieldset" className="w-full mb-6">
            <RadioGroup
              row
              value={selectedAdditional}
              onChange={(e) => setSelectedAdditional(e.target.value)}
              className="flex flex-wrap gap-4"
            >
              {additionalServices.map((service) => (
                <FormControlLabel
                  key={service}
                  value={service}
                  control={<Radio size="small" />}
                  label={service}
                  className="m-0"
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextField
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              name="shiftingFrom"
              placeholder="Shifting From?"
              value={formData.shiftingFrom}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              name="shiftingTo"
              placeholder="Shifting To?"
              value={formData.shiftingTo}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              name="comment"
              placeholder="Want to do what?"
              value={formData.comment}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              size="small"
            />
            <Button
              type="submit"
              variant="contained"
              className="bg-blue-600 hover:bg-blue-700 text-white h-10"
            >
              Submit
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ServiceForm; 