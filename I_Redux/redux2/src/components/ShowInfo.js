import React from 'react';
import { useSelector } from 'react-redux';

export const ShowInfo = () => {

  const fruits = useSelector( state => state.fruits ); 
  // getting the whole redux partition, why not? 
  // we can get state.fruits.apples and state.fruits.apples separately using useSelector twice,
  // but it's a little slower

  const profile = useSelector( state => state.profile );

  return (
    <>
      <div>Apples: {fruits.apples}</div>
      <div>Pears: {fruits.pears}</div>
      <div>
        Profile: {profile.surname} {profile.firstname}
      </div>
    </>
  );

}
