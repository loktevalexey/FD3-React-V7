import { createSlice } from '@reduxjs/toolkit';

const initialState={
  surname: "aaa",
  firstname: "bbb",
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

    profileUpdate: (state,action) => {
      state.surname = action.payload.surname;
      state.firstname = action.payload.firstname;
    },

  },
});

export const { profileUpdate } = profileSlice.actions;

export default profileSlice.reducer;
