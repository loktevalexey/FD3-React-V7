import React from 'react';
import { useDispatch } from 'react-redux';

import { profileUpdate } from '../redux/profileAC';

export const ProfileChange = () => {

  const dispatch = useDispatch();

  function set1() {
    dispatch( profileUpdate("Dow","John") );
  };

  function set2() {
    dispatch( profileUpdate("Roberts","Julia") );
  };

  return (
    <>
      <input type='button' value='set John Dow' onClick={set1} />
      <input type='button' value='set Julia Roberts' onClick={set2} />
    </>
);

}
