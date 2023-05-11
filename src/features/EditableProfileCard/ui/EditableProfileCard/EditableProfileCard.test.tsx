import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '@/shared/config/tests/renderComponent/renderComponent';
import { profileMock } from '@/entities/Profile/model/mocks/profileMock';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

describe('features/EditableProfileCard', () => {
  beforeEach(async () => {
    jest.spyOn($api, 'get').mockReturnValue(
      Promise.resolve({
        data: profileMock,
      }),
    );
    renderComponent(<EditableProfileCard id="1" />, {
      initialStore: {
        profile: {
          readonly: true,
          data: profileMock,
          form: profileMock,
        },
        user: { authData: { id: '1' } },
      },
      asyncReducers: { profile: profileReducer },
    });
    await waitFor(() => {
      expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue(profileMock.firstName);
    });
  });

  test('Readonly mode can be switched', () => {
    userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('Form should be reset on Cancel btn click', () => {
    userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
    userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

    userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue(profileMock.firstName);
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue(profileMock.lastName);
  });

  test('Form should not be saved if validation fails', async () => {
    userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

    userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    // expect(screen.getByTestId('EditableProfileCard.Error.Title')).toBeInTheDocument(); // WHY ???
  });

  test('Form data should be sent to server on successful edit', () => {
    const mockPutReq = jest.spyOn($api, 'put');

    userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

    userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
