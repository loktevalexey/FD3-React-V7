import React from 'react';

import "./MobileClient.css";

const MobileClient = ({fio,balance}) => {

  console.log("render MobileClient "+fio);

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{balance}</span>
      <span className='MobileClientFIO'>{fio}</span>
    </div>
  );
};

export default React.memo(MobileClient);
// если пропсы не изменились - React.memo возвращает результат предыдущего рендера
