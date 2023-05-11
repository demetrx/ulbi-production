import { StateSchema } from '@/app/providers/store';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

const form = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('getProfileForm.test', () => {
  test('returns profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { form },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
