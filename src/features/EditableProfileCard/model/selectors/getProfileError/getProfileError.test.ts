import { StateSchema } from '@/app/providers/store';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('returns profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'error' },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
