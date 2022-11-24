import { PROFILE_UPDATE } from './profileAC';

const initState={
  surname: "aaa",
  firstname: "bbb",
}

// state here is not the whole Redux state, but just a partition,
// for which this reducer is in charge

function profileReducer(state=initState,action) {
  switch (action.type) {

    case PROFILE_UPDATE: {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        surname: action.surname,
        firstname: action.firstname,
      };
      console.log('state after change:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default profileReducer;
