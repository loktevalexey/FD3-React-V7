import React from 'react';

import "./MobileClient.css";

export default ({fio,balance}) => {

  console.log("render MobileClient "+fio);
  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{balance}</span>
      <span className='MobileClientFIO'>{fio}</span>
    </div>
  )

};
