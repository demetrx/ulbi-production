import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('validateProfileData.test', () => {
  test('fulfills successfully', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('with wrong user data', () => {
    const result = validateProfileData({ ...data, firstName: '', lastName: '' });

    expect(result).toEqual([ValidateProfileError.WRONG_USER_DATA]);
  });

  test('with wrong age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.WRONG_AGE]);
  });

  test('with wrong country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.WRONG_COUNTRY]);
  });

  test('with wrong all fields', () => {
    const result = validateProfileData({ });

    expect(result).toEqual([ValidateProfileError.WRONG_USER_DATA, ValidateProfileError.WRONG_AGE, ValidateProfileError.WRONG_COUNTRY]);
  });
});
