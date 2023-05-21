import { selectByTestId } from '../../helpers/selectByTestId';

export const updateProfile = (firstname: string, lastname: string) => {
  cy.get(selectByTestId('EditableProfileCardHeader.EditButton')).click();

  cy.get(selectByTestId('ProfileCard.firstName')).clear();
  cy.get(selectByTestId('ProfileCard.firstName')).type(firstname);
  cy.get(selectByTestId('ProfileCard.lastName')).clear();
  cy.get(selectByTestId('ProfileCard.lastName')).type(lastname);

  cy.get(selectByTestId('EditableProfileCardHeader.SaveButton')).click();
};

export const resetProfile = (profileId: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8000/profile/${profileId}`,
  headers: { Authorization: 'asdf' },
  body: {
    id: '4',
    firstName: 'John',
    lastName: 'Doe',
    age: 100,
    currency: 'USD',
    country: 'Poland',
    city: 'Krakow',
    username: 'test-user',
    // eslint-disable-next-line max-len
    avatar: 'https://media.licdn.com/dms/image/C4E03AQFkm84SuxyPTw/profile-displayphoto-shrink_800_800/0/1657872278941?e=1684972800&v=beta&t=bCNt47AhvEN0BJXwqfLmTllAbwJXeySC3S0bBnR02EA',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
