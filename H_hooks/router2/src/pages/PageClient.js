import React from 'react';
import {useParams} from "react-router-dom";

import { MobileClientInfo } from '../components/MobileClientInfo';

import { appData } from '../appData';

export const PageClient = () => {

    const params = useParams();
    console.log(params);
    // since the route looks like that: <Route path="/client/:clid" element={<Page_Client/>} />
    // it means useParams hook returns what's in the URI after "/client/" as "clid" property (it's string)
    
    const clientId=parseInt(params.clid);

    const clientData=appData.clients.find( c => c.id===clientId );

    return (
      <MobileClientInfo fio={clientData.fio} balance={clientData.balance} />
    );
    
}
