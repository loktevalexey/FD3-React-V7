import React from 'react';

import { plateModel } from '../models/PlateModel';

export const HungryGuy = () => {

  function eatAnApple() {
    plateModel.apples--;
  }

  function eatAnPear() {
    plateModel.pears--;
  }

  return (
    <>
        <input type='button' value='eat an apple' onClick={eatAnApple} />
        <input type='button' value='eat a pear' onClick={eatAnPear} />
    </>
);

}
