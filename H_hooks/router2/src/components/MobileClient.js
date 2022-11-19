import React from 'react';
import { NavLink } from 'react-router-dom';

import './MobileClient.css';

export const MobileClient = ( { id, fio, balance } ) => {

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{balance}</span>
      <NavLink to={"/clients/"+id} className="MobileClientFIO">{fio}</NavLink>
    </div>
  );

};
