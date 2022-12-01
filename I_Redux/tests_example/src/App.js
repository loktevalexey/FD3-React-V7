import React from 'react';

import CounterButton from './components/CounterButton';
import { InputNumber } from './components/InputNumber';

export const App = () => (
  <div>
    <CounterButton /> 
    <br/><hr/>
    <InputNumber/>
  </div>
);
