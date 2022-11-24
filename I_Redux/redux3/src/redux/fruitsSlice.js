import { createSlice } from '@reduxjs/toolkit';

const initialState={
  apples: 0,  // how many apples we have
  pears: 0,   // how many pears we have
}

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {

    appleAdd: (state,action) => {
      state.apples+=action.payload;  // what we pass to the appleAdd function while dispatching - gets here as action.payload
    },

    pearsAdd: (state,action) => {
      state.pears+=action.payload;
    },

  },
});

// Redux Toolkit creates actions automatically, here they are:
export const { appleAdd, pearsAdd } = fruitsSlice.actions;

// Redux Toolkit creates reducer automatically, here it is:
export default fruitsSlice.reducer;
// Redux Toolkit does some magic under hood wrapping the functions 
// in the "reducers" list using Immer.js library
