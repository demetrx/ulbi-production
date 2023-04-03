import { StateSchema } from 'app/providers/store';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
  test('returns profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: false },
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toBe(undefined);
  });
});
