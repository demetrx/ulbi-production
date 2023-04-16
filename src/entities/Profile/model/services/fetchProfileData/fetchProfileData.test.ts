import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('fetchProfileData.test', () => {
  test('fulfils successfully', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const action = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(data);
  });

  test('rejects with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await thunk.callThunk('1');

    expect(action.meta.requestStatus).toBe('rejected');
  });
});
