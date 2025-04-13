"use client";
import { ToggleButtonGroup, ToggleButton, useTheme } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PetsIcon from '@mui/icons-material/Pets';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportIcon from '@mui/icons-material/Support';
import { FC } from 'react';

interface ServiceTabsProps {
  value: string;
  onChange: (value: string) => void;
}


const services = [
  { key: 'packingAndMoving', label: 'Packing & Moving', icon: LocalShippingIcon },
  { key: 'petRelocation', label: 'Pet Relocation', icon: PetsIcon },
  { key: 'petTaxi', label: 'Pet Taxi', icon: AirportShuttleIcon },
  { key: 'vehicleShifting', label: 'Vehicle Shifting', icon: DirectionsCarIcon },
  { key: 'storage', label: 'Storage', icon: AirportShuttleIcon },
  { key: 'supportServices', label: 'Support Services', icon: SupportIcon },
];

const ServiceTabs: FC<ServiceTabsProps> = ({ value, onChange }) => {
  const { palette } = useTheme();

  return (
    <div className='flex items-center min-w-full'>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(e, val) => val && onChange(val)}
        className='min-w-full'
      >
        {services.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === services.length - 1;

          return (
            <ToggleButton
              key={item.key}
              value={item.key}
              className={`px-4 py-2 border transition-all duration-150
                ${value === item.key ? `text-white bg-[${palette.primary.main}] border-[${palette.primary.main}] hover:bg-[${palette.primary.main}]` : `text-gray-600 border-gray-300 hover:bg-[${palette.primary.main}] hover:opacity-80`}
                ${isFirst ? 'rounded-l-lg' : ''}
                ${isLast ? 'rounded-r-lg' : ''}
                ${!isFirst && !isLast ? 'rounded-none' : ''}
                gap-2 font-normal flex items-center justify-center capitalize px-7 text-nowrap
              `}
            >
              <item.icon fontSize='small' /> {item.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
};

export default ServiceTabs;
