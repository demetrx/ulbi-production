import { createSlice } from '@reduxjs/toolkit';
import { NotificationsButtonSchema } from '../types/NotificationsButtonSchema';

const initialState: NotificationsButtonSchema = {

};

export const notificationsButtonSlice = createSlice({
  name: 'notificationsButton',
  initialState,
  reducers: {
    // template: (state, action: PayloadAction<string>) => {
    //
    // },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: notificationsButtonActions } = notificationsButtonSlice;
export const { reducer: notificationsButtonReducer } = notificationsButtonSlice;
