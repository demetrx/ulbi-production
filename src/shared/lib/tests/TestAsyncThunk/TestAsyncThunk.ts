import { StateSchema } from 'app/providers/store';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import axios, { AxiosStatic } from 'axios';

type AsyncThunkType<Return, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>

jest.mock('axios');

// For TS only, they exist there
// mocking not only module, but internal methods too (e.g. post)
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  asyncThunk: AsyncThunkType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: NavigateFunction;

  constructor(
    asyncThunk: AsyncThunkType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.asyncThunk = asyncThunk;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.asyncThunk(arg);
    const action = await actionCreator(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    );

    return action;
  }
}
