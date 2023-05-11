import { StateSchema } from '@/app/providers/store';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

const data = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('getProfileData.test', () => {
  test('returns profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('works with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
