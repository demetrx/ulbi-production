import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

// createAsyncThunk = (arg) => actionCreator (dispatch, getState, {rejectValue}) => action
describe('loginByUsername.test', () => {
  test('fulfils successfully', async () => {
    const userValue = { username: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(action.payload).toEqual(userValue);
  });

  test('rejects with error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(action.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toBe('error');
  });

  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  //
  // test('fulfils successfully', async () => {
  //   const userValue = { username: 'admin', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //
  //   const actionCreator = loginByUsername({ username: 'admin', password: '123' });
  //   const action = await actionCreator(dispatch, getState, undefined);
  //
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(action.meta.requestStatus).toBe('fulfilled');
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(action.payload).toEqual(userValue);
  // });
  //
  // test('rejects with error', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //
  //   const actionCreator = loginByUsername({ username: 'admin', password: '123' });
  //   const action = await actionCreator(dispatch, getState, undefined);
  //
  //   expect(action.meta.requestStatus).toBe('rejected');
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(action.payload).toBe('error');
  // });
});
