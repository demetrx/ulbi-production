import { StateSchema } from 'app/providers/store';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type AsyncThunkType<Return, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  asyncThunk: AsyncThunkType<Return, Arg, RejectedValue>;

  constructor(asyncThunk: AsyncThunkType<Return, Arg, RejectedValue>) {
    this.asyncThunk = asyncThunk;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.asyncThunk(arg);
    const action = await actionCreator(this.dispatch, this.getState, undefined);

    return action;
  }
}
