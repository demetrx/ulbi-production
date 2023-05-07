import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from '../types/ProfileSchema';

export const profileMock: Profile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 465,
  currency: Currency.USD,
  country: Country.UnitedStates,
  city: 'Los Angeles',
  username: 'admin',
};
