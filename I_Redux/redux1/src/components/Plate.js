import React from 'react';
import { useSelector } from 'react-redux';

export const Plate = () => {

  const apples = useSelector( state => state.apples );
  
  return (
    <>
      <div>There are {apples} apples on the plate</div>
    </>
  );

}
