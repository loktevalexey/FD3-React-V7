function personReducer(state, action) {
    switch (action.type) {
      case 'age1':
        return {...state, age: state.age+1};
      case 'ageN':
        return {...state, age: state.age+action.val};
      case 'genderM':
        return {...state, gender: "М"};
      case 'genderF':
        return {...state, gender: "F"};
      default:
        //return state;
        throw new Error('unknown action');
    }
}

export { personReducer };