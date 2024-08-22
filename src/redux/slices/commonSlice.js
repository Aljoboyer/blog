import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'commonstoreslice',
  initialState: {
    settingsCurrentTab: 0,
  },
  reducers: {
    setSettingsCurrentTab: (state, action) => {
      state.settingsCurrentTab = action.payload  ;
    },
  },
});

export const {setSettingsCurrentTab} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
