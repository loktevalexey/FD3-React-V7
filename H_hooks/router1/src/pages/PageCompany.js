import React from 'react';

import { MobileCompany } from '../components/MobileCompany';

import { appData } from '../appData';

export const PageCompany = () => {
          
  return (
    <MobileCompany name={appData.companyName} clients={appData.clients} />
  );
    
}
