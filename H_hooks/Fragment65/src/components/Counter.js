import React, { useState, useEffect, Fragment } from 'react';

import './Counter.css'

export default props => {

  const [cnt, setCnt] = useState(0);

  useEffect(
    ()=>{
      const timer=setInterval(()=>setCnt(prevCnt=>prevCnt+1),1000);
      console.log("таймер запущен");
    },
    []
  );

  return (
    <div>
      <span>Счётчик: {cnt}</span><br/>
      <span>Счётчик: {cnt}</span><br/>
      <span>Счётчик: {cnt}</span>
    </div>
  );
};
