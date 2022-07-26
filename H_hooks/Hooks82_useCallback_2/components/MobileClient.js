import React, { useMemo } from 'react';

import "./MobileClient.css";

export default ({id,fio,balance,cbChangeBalance}) => {

  const memoizeedRenderResult=useMemo(
    ()=>{
      console.log("render MobileClient "+fio);
      return (
        <div className='MobileClient'>
          <span className='MobileClientBalance'>
            {balance}
            <input type="button" value="+1" onClick={()=>cbChangeBalance(id,1)} />
          </span>
          <span className='MobileClientFIO'>{fio}</span>
        </div>
      )
    },
    [id,balance,fio,cbChangeBalance]   
  );

  return memoizeedRenderResult;
};
