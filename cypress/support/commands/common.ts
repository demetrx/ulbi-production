import { USER_LS_KEY } from '../../../src/shared/consts/localStorage';
import { User } from "'../../../src/entities/User/model/types/UserSchema";
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username: string = 'test-user', password: string = '123') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(user?: string, password?: string): Chainable<User>
      // eslint-disable-next-line no-undef
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
