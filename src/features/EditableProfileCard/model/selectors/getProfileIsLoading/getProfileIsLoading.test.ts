import { StateSchema } from 'app/providers/store';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('returns profile isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
