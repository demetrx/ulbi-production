import { USER_LS_KEY } from '../../../src/shared/consts/localStorage';

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
  });
};
