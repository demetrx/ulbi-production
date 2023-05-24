import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from '@/shared/consts/localStorage';
import { User } from '../types/UserSchema';
import type { UserSchema } from '../types/UserSchema';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LS_KEY);
      if (user) {
        const parsedUser = JSON.parse(user) as User;
        state.authData = parsedUser;
        setFeatureFlags(parsedUser.features);
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
