import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const form = {
  firstName: 'Dmytro',
  lastName: 'Bielousov',
  age: 20,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};
describe('updateProfileData.test', () => {
  test('fulfils successfully', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: form }));
    const action = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(form);
  });

  test('rejects with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await thunk.callThunk();

    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...form, lastName: '' },
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ form }));
    const action = await thunk.callThunk();

    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toEqual([ValidateProfileError.WRONG_USER_DATA]);
  });
});
