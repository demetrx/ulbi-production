import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/UserSchema';
import { USER_LS_KEY } from '@/shared/consts/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(USER_LS_KEY);

    if (!userId) return rejectWithValue(('error'));

    try {
      const user = await dispatch(getUserDataByIdQuery(JSON.parse(userId))).unwrap();

      if (!user) return rejectWithValue(('no user data found'));

      return user;
    } catch (e) {
      return rejectWithValue(('error'));
    }
  },
);
