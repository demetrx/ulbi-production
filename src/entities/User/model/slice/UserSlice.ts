import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/consts/localStorage';
import { User } from '../types/UserSchema';
import type { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LS_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._initialized = true;
    },
    logout: (state) => {
      const user = localStorage.getItem(USER_LS_KEY);
      if (user) {
        state.authData = undefined;
        localStorage.removeItem(USER_LS_KEY);
      }
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
