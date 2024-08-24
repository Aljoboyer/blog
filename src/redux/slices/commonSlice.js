import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'commonstoreslice',
  initialState: {
    user: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload  ;
    },
  },
});

export const {setUserData} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
