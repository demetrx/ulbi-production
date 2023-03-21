import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserType } from 'entities/User';
import { USER_LS_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
  username: string
  password: string
}

// enum LoginErrors {
//   INCORRECT_DATA = '',
//   SERVER_ERROR= '',
// }

interface ThunkAPIConfig {
  rejectValue: string
}

export const loginByUsername = createAsyncThunk<UserType, LoginByUsernameProps, ThunkAPIConfig>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<UserType>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return thunkAPI.rejectWithValue(('error'));
    }
  },
);
