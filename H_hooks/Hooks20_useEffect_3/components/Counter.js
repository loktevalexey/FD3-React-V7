import React, { useState, useEffect } from 'react';

import "./Counter.css";

export default props => {

  const [cnt, setCnt] = useState(0);
  const [fruit, setFruit] = useState("яблоки");

  useEffect(
    ()=>{
      setCnt(0);
      const timer=setInterval(()=>{
        setCnt(prevCnt=>prevCnt+1);
      },1000);
      console.log("таймер запущен");
      return ()=>{
        clearTimeout(timer);
        console.log("таймер остановлен");
        // раз что-то возвращается из этой функции, значит, это - функция очистки эффекта, 
        // то что нужно выполнить при размонтировании компонента и при изменении fruit
      };
    },
    [fruit] // массив зависимостей НЕ пуст - функция будет выполняться при монтировании компонента и каждый раз, когда меняется fruit
  );

  return (
    <div>
      У нас сейчас: {cnt+" "+fruit}<br/>
      <button onClick={ () => setFruit("груши") }>собираем груши</button>
      <button onClick={ () => setFruit("яблоки") }>собираем яблоки</button>
    </div>
  );
};
