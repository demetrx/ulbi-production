import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserType } from 'entities/User';
import { USER_LS_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/store';

interface LoginByUsernameProps {
  username: string
  password: string
}

// enum LoginErrors {
//   INCORRECT_DATA = '',
//   SERVER_ERROR= '',
// }

const loginByUsername = createAsyncThunk<UserType, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;

    try {
      const response = await extra.api.post<UserType>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(('error'));
    }
  },
);

export { loginByUsername };
