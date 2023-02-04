import React, { useState, useMemo } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [companyName,setCompanyName] = useState("МТС");
  const [clients,setClients]=useState(props.clients);

  const clientsMemoizeed=useMemo(
    () => clients.map( client => 
        <MobileClient key={client.id} fio={client.fio} balance={client.balance} /> ),
    [clients]
  );

  function sidorov() {
    let newClients=clients.slice(); // это не про иммутабельные изменения,
    // просто для setClients требуется чтобы аргумент изменился, иначе перерендера не будет
    newClients.forEach( client => {
      if ( client.id===105 )
        client.balance++;
    } );
    setClients(newClients);
  }

  return (
    <div className="MobileCompany">
      <div>
        <b>Компания: {companyName}</b><br/>
        <input type="button" value="МТС" onClick={ ()=>setCompanyName("МТС") } />
        <input type="button" value="A1" onClick={ ()=>setCompanyName("A1") } />
      </div>
      { clientsMemoizeed }
      <input type="button" value="Сидоров++" onClick={sidorov} />
    </div>
  );
};
