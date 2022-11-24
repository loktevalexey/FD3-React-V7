const PROFILE_UPDATE='PROFILE_UPDATE'; // update profile

const profileUpdate=function(surname,firstname) {
  return {
    type: PROFILE_UPDATE,
    surname: surname,
    firstname: firstname,
  };
}

export {
  profileUpdate, PROFILE_UPDATE,
}
