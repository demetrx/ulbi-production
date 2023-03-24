import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('returns isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };

    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
