import React from 'react';

import { MobileClients } from '../components/MobileClients';

import { appData } from '../appData';

export const PageClients = () => {
          
  return (
    <MobileClients name={appData.companyName} clients={appData.clients} />
  );
    
};
