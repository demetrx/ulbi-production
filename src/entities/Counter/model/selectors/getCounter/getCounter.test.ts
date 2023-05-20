import { StateSchema } from '@/app/providers/store';
import { getCounterValue } from './getCounter';

describe('getCounter', () => {
  test('returns counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toEqual({ value: 10 });
  });
});
