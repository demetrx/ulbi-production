import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  WRONG_USER_DATA = 'WRONG_USER_DATA',
  WRONG_AGE = 'WRONG_AGE',
  WRONG_COUNTRY = 'WRONG_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
export interface Profile {
  id?: string
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?:string
}
export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string
  readonly: boolean
  validationErrors?: ValidateProfileError[]
}
