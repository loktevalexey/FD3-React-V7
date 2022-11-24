import React from 'react';
import { useDispatch } from 'react-redux';

import { fruitAppleAdd, fruitPearAdd } from '../redux/fruitsAC';

import "./Buttons.css"

export const Buttons = () => {

  const dispatch = useDispatch();

  function decApples() {
    dispatch( fruitAppleAdd(-1) );
  };

  function incApples() {
    dispatch( fruitAppleAdd(1) );
  };

  function decPears() {
    dispatch( fruitPearAdd(-1) );
  };

  function incPears() {
    dispatch( fruitPearAdd(1) );
  };

  return (
    <>
      <div className="SButtonsBlock">
        Apples:
        <input type='button' value='-' onClick={decApples} />
        <input type='button' value='+' onClick={incApples} />
      </div>
      <br/>
      <div className="SButtonsBlock">
        Pears:
        <input type='button' value='-' onClick={decPears} />
        <input type='button' value='+' onClick={incPears} />
      </div>
    </>
  );

}
