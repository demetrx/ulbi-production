import { Profile, ValidateProfileError } from '../../types/ProfileSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    firstName, lastName, age, country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.WRONG_USER_DATA);
  }

  if (!age || !Number.isInteger((age))) {
    errors.push(ValidateProfileError.WRONG_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.WRONG_COUNTRY);
  }

  return errors;
};
