import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  WRONG_USER_DATA = 'WRONG_USER_DATA',
  WRONG_AGE = 'WRONG_AGE',
  WRONG_COUNTRY = 'WRONG_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string
  readonly: boolean
  validationErrors?: ValidateProfileError[]
}
