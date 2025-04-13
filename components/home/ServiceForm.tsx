"use client";
import React, { useState } from 'react';
import { Divider } from '@mui/material';
import ServiceTabs from './form/ServiceTabs';
import RelocationForm from './form/RelocationForm';
import SupportForm from './form/SupportForm';



const ServiceForm = () => {
  const [selectedTab, setSelectedTab] = useState('packingAndMoving');


  return (
    <div className=" w-full lg:w-full z-40 bg-white shadow-lg border border-gray-300 rounded-xl">
      <div className="p-6 px-7 overflow-x-scroll no-scrollbar max-lg:mr-5">
        <ServiceTabs
          value={selectedTab}
          onChange={(value) => setSelectedTab(value)}
        />
      </div>
      <Divider />
      {selectedTab !== 'supportServices' ? (
        <RelocationForm selectedTab={selectedTab} />
      ) : (
        <>
          <SupportForm />
        </>
      )}
    </div>
  );
};

export default ServiceForm;
