import React, { useState } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [clients,setClients]=useState(props.clients);

  function sidorov() {
    let newClients=clients.slice(); // не пытаемся вносить иммутабельные изменения,
    // просто для setClients требуется чтобы аргумент изменился, иначе перерендера не будет
    newClients.forEach( client => {
      if ( client.id===105 )
        client.balance++;
    } );
    setClients(newClients);
  }

  return (
    <div className="MobileCompany">
      {
        clients.map( client => <MobileClient key={client.id} fio={client.fio} balance={client.balance} /> )
      }
      <input type="button" value="Сидоров++" onClick={sidorov} />
    </div>
  );
};
