import React from 'react';
import {useParams} from "react-router-dom";

import MobileClientInfo from '../components/MobileClientInfo';

import appData from '../appData';

// react-router v6 предоставляет возможности доступа к параметрам из УРЛа только через хук useParams,
// т.е. только для функциональных компонентов

const Page_Client = props => {
    
    const params = useParams();
    console.log(params);
    // раз написано <Route path="/client/:clid" element={<Page_Client/>} />
    // значит Page_Client получит то что в УРЛе после /client/ от хука useParams под именем clid в виде строки
    
    let clientId=parseInt(params.clid);

    let clientData=appData.clientsArr.find( c => c.id==clientId );

    return (
      <MobileClientInfo
        info={clientData}
      />
    );
    
}
    
export default Page_Client;
