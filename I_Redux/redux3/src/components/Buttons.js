import React from 'react';
import { useDispatch } from 'react-redux';

import "./Buttons.css"

import { appleAdd, pearsAdd } from "../redux/fruitsSlice.js";

export const Buttons = () => {

  const dispatch = useDispatch();

  function decApples() {
    dispatch( appleAdd(-1) );
  };

  function incApples() {
    dispatch( appleAdd(1) );
  };

  function decPears() {
    dispatch( pearsAdd(-1) );
  };

  function incPears() {
    dispatch( pearsAdd(1) );
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
