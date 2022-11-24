import React from 'react';
import { useSelector } from 'react-redux';

export const ShowFruits = () => {

  const fruits = useSelector( state => state.fruits ); 

  console.log("ShowFruits render");

  return (
    <>
      <div>Apples: {fruits.apples}</div>
      <div>Pears: {fruits.pears}</div>
    </>
  );

};
