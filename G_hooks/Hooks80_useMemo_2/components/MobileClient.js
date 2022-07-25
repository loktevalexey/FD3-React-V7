import React, { useMemo } from 'react';

import "./MobileClient.css";

export default ({fio,balance}) => {

  const memoizeedRenderResult=useMemo(
    ()=>{
      console.log("render MobileClient "+fio);
      return (
        <div className='MobileClient'>
          <span className='MobileClientBalance'>{balance}</span>
          <span className='MobileClientFIO'>{fio}</span>
        </div>
      )
    },
    [balance,fio]   
  );
  // useMemo запоминает результат рендера, т.е. то что вернула функция.
  // если зависимости (т.е. то что указано во втором аргументе) не изменились при следующем рендере,
  // то useMemo не выполняет эту функцию, а просто возвращает закэшированное значение.
  // таким образом, если массив зависимостей НЕ изменился при следующем рендере:
  //  - получаем экономию на ВРЕМЕНИ ВЫПОЛНЕНИЯ ФУНКЦИИ, но не на этапе реконсиляции (т.е. экономия на спичках);
  //  - если внутри данного компонента рисуются дочерние компоненты - до их рендера дело бы НЕ ДОШЛО (а вот это уже эффективно).

  return memoizeedRenderResult;
};
