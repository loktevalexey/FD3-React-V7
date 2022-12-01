import React, { useState } from 'react';

import {power2} from '../modules/power2';

export const InputNumber = props => {

  const [cnt,setCnt] = useState(0);

  function changed(eo) {
    setCnt(+eo.target.value);
  };

  return (
    <div>
      <h3>Ввод числа</h3>
      <input type="text" data-testid="inp" value={cnt} onChange={changed} />
      <div>{"число: "+cnt+', степень двойки: '+power2(cnt)}</div>
    </div>
  );

};
