import { FRUIT_APPLE_ADD, FRUIT_PEAR_ADD } from './fruitsAC';

const initState={
  apples: 0,  // how many apples we have
  pears: 0,   // how many pears we have
}

// state here is not the whole Redux state, but just a partition,
// for which this reducer is in charge

function fruitsReducer(state=initState,action) {
  switch (action.type) {

    case FRUIT_APPLE_ADD: {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        apples: state.apples+action.amount,
      };
      console.log('state after change:',newState);
      return newState;
    }

    case FRUIT_PEAR_ADD: {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        pears: state.pears+action.amount,
      };
      console.log('state after change:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default fruitsReducer;
