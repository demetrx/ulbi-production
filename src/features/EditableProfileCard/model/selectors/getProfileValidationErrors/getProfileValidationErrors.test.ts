import { StateSchema } from '@/app/providers/store';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
  test('returns profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.WRONG_AGE,
        ],
      },
    };

    expect(getProfileValidationErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.WRONG_AGE]);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidationErrors(state as StateSchema)).toBe(undefined);
  });
});
