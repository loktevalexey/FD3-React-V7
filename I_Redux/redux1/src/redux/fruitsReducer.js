const initState={
  apples: 7,  // how many apples there are
}

function fruitsReducer(state=initState,action) {
  switch (action.type) {

    case 'eat_apple': {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        apples: state.apples-1,
      };
      console.log('state after change:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default fruitsReducer;
