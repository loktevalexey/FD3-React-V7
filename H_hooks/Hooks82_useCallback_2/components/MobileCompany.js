import React, { useState, useCallback } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [clients,setClients]=useState(props.clients);

  function changeBalance(clientId,delta) {
    let newClients=clients.slice();
    newClients.forEach( client => {
      if ( client.id===clientId )
        client.balance+=delta;
    } );
    setClients(newClients);
  }

  const memoizedChangeBalance = useCallback( changeBalance, [] );
  // useCallback - обёртка над useMemo
  // т.к. массив зависимостей пуст, useCallback при каждом рендере будет возвращать 
  // одну и ту же ссылку на функцию changeBalance, 
  // хоть сама changeBalance каждый раз новая

  return (
    <div className="MobileCompany">
      {
        clients.map( client => <MobileClient key={client.id} 
          id={client.id} 
          fio={client.fio} balance={client.balance} 
          cbChangeBalance={memoizedChangeBalance}
          /> )
      }
    </div>
  );
};
