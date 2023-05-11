import { } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('returns username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'admin' },
    };

    expect(getLoginUsername(state as StateSchema)).toBe('admin');
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
