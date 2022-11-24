import React from 'react';
import { useSelector } from 'react-redux';

export const ShowProfile = () => {

  const profile = useSelector( state => state.profile );

  console.log("ShowProfile render");

  return (
    <div>
      Profile: {profile.surname} {profile.firstname}
    </div>
  );

}
