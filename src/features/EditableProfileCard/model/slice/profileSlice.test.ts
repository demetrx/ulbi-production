import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/EditableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('profileSlice.test', () => {
  test('test setReadOnly', () => {
    const state = { readonly: false } as ProfileSchema;
    expect(profileReducer(state, profileActions.setReadOnly(true))).toEqual({ readonly: true });
  });

  test('test cancelEdit', () => {
    const state = {
      readonly: false, validationErrors: [ValidateProfileError.WRONG_COUNTRY], form: {}, data,
    } as ProfileSchema;

    expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
      readonly: true, validationErrors: undefined, form: data, data,
    });
  });

  test('test updateProfile', () => {
    const state = { form: data } as ProfileSchema;

    expect(profileReducer(state, profileActions.updateProfile({ firstName: 'Bro' }))).toEqual({
      form: { ...data, firstName: 'Bro' },
    });
  });

  test('test updateProfileData.pending', () => {
    const state = {
      validationErrors: [ValidateProfileError.SERVER_ERROR],
      isLoading: false,
    } as ProfileSchema;

    expect(profileReducer(state, updateProfileData.pending)).toEqual({
      validationErrors: undefined,
      isLoading: true,
    });
  });

  test('test updateProfileData.fulfilled', () => {
    const state = {
      validationErrors: [ValidateProfileError.SERVER_ERROR],
      isLoading: true,
    } as ProfileSchema;

    expect(profileReducer(state, updateProfileData.fulfilled(data, ''))).toEqual({
      validationErrors: undefined,
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
