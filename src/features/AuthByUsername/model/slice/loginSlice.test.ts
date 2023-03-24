import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test setUsername', () => {
    const state = { username: 'admin' } as LoginSchema;
    expect(loginReducer(state, loginActions.setUsername('admin1'))).toEqual({ username: 'admin1' });
  });

  test('test setPassword', () => {
    const state = { password: '123' } as LoginSchema;
    expect(loginReducer(state, loginActions.setPassword('1234'))).toEqual({ password: '1234' });
  });
});
