import { } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
