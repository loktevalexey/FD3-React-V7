import React from 'react';
import { useDispatch } from 'react-redux';

import { profileUpdate } from "../redux/profileSlice.js";

export const ProfileChange = () => {

  const dispatch = useDispatch();

  function set1() {
    dispatch( profileUpdate({surname:"Dow",firstname:"John"}) );
  };

  function set2() {
    dispatch( profileUpdate({surname:"Roberts",firstname:"Julia"}) );
  };

  return (
    <>
      <input type='button' value='set John Dow' onClick={set1} />
      <input type='button' value='set Julia Roberts' onClick={set2} />
    </>
);

}
