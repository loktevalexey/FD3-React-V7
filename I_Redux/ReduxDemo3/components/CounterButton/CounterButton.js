import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterButton_create, counterButton_add } from '../../redux/countersAC';

import './CounterButton.css';

export const CounterButton = ( { counterid } ) => {

  const counterValue = useSelector( state => state.counters.cnts[counterid] );
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch( counterButton_create(counterid) );
    },
    []
  );

  function incCounter() {
    dispatch( counterButton_add(counterid,1) );
  };

  function decCounter() {
    dispatch( counterButton_add(counterid,-1) );
  };

  return (
    <div className="CounterButton">
      <input type='button' value='-' onClick={decCounter} />
      <span className="CounterButtonValue">{counterValue}</span>
      <input type='button' value='+' onClick={incCounter} />
    </div>
  );

}
