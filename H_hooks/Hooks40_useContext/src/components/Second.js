import React, { useMemo } from 'react';

import { Third } from "./Third";

export const Second = () => {

  const memoizeedRender=useMemo( () => {
    console.log("render Second component");

    return (
      <Third/>
    );
  }, [] );

  return memoizeedRender;

};
