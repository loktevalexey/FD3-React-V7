import React, { useMemo } from 'react';

import "./MobileClient.css";

export default ({fio,balance}) => {

  // console.log("run MobileClient "+fio);

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
  // useMemo запоминает то что вернула функция (т.е. в данном случае - кусок JSX).
  // при следующем рендере, если зависимости (т.е. то что указано во втором аргументе) не изменились,
  // то useMemo не выполняет эту функцию, а просто возвращает предыдущее значение.
  // таким образом, если массив зависимостей НЕ изменился при следующем рендере:
  //  - получаем экономию на ВРЕМЕНИ ВЫПОЛНЕНИЯ ФУНКЦИИ (это маловажно, функция быстрая, и реконсиляция потом всё равно выполняется),
  //  - если внутри данного компонента рисуются дочерние компоненты - до ИХ рендера дело НЕ ДОХОДИТ (а вот это уже эффективно!).

  return memoizeedRenderResult;
};
