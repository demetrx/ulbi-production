import { } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('returns password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123' },
    };

    expect(getLoginPassword(state as StateSchema)).toBe('123');
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
