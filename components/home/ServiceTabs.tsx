"use client";
import React, { useState } from 'react';
import { Card, Tabs, Tab } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PetsIcon from '@mui/icons-material/Pets';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InventoryIcon from '@mui/icons-material/Inventory';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportIcon from '@mui/icons-material/Support';

const services = [
  { label: 'Packing & Moving', icon: <LocalShippingIcon className="!text-[16px]" /> },
  { label: 'Pet Relocation', icon: <PetsIcon className="!text-[16px]" /> },
  { label: 'Pet Taxi', icon: <AirportShuttleIcon className="!text-[16px]" /> },
  { label: 'Storage', icon: <InventoryIcon className="!text-[16px]" /> },
  { label: 'Vehicle Shifting', icon: <DirectionsCarIcon className="!text-[16px]" /> },
  { label: 'Support Services', icon: <SupportIcon className="!text-[16px]" /> }
];

const ServiceTabs = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelected(newValue);
  };

  return (
    <Card
      variant="outlined"
      className="absolute top-[-2.5rem] z-40 w-full h-40 flex items-center px-6 shadow-sm"
    >
      <div className="w-full overflow-x-auto">
        <Tabs
          value={selected}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          className="min-w-fit inline-flex bg-white border border-gray-200 rounded-lg max-h-[36px]"
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {services.map((service, index) => (
            <Tab
              key={index}
              icon={service.icon}
              iconPosition="start"
              label={
                <span className="text-[11px] font-medium">
                  {service.label.toUpperCase()}
                </span>
              }
              className={`min-h-[36px] px-2 py-[3px] transition-all duration-200 text-xs
                ${
                  selected === index
                    ? 'bg-[#0061FF] text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }
                ${
                  index === 0
                    ? 'rounded-l-[10px]'
                    : index === services.length - 1
                    ? 'rounded-r-[10px]'
                    : ''
                }
                border-r border-gray-200 last:border-r-0 whitespace-nowrap`}
            />
          ))}
        </Tabs>
      </div>
    </Card>
  );
};

export default ServiceTabs;
