import React from 'react';

export const MobileClientInfo = ( { fio, balance } ) => {

  return (
    <h1>
      клиент &laquo;{fio}&raquo;, баланс {balance}
    </h1>
  );

};
