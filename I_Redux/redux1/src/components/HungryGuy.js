import React from 'react';
import { useDispatch } from 'react-redux';

import "./HungryGuy.css"

export const HungryGuy = () => {

  const dispatch = useDispatch();

  function eatAnApple() {
    dispatch( {
      type: "eat_apple",
      payload: 555, // we can pass some additional information
    } );
  };

  return (
    <>
        <input type='button' value='eat an apple' onClick={eatAnApple} />
    </>
);

}
