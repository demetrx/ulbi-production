import { selectByTestId } from '../../helpers/selectByTestId';

describe('template spec', () => {
  describe('User NOT authorized', () => {
    it('Going to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Going to profile page, redirects to main', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Going to non-existing route', () => {
      cy.visit('/awawdawd');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Going to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Going to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
