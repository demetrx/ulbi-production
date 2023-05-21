let profileId = '';

describe('Going to profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${profileId}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('profile loads successfully', () => {
    const newFirstName = 'Tim';
    const newLastName = 'Burton';
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'John');
    cy.updateProfile(newFirstName, newLastName);
    cy.getByTestId('ProfileCard.firstName').should('have.value', newFirstName);
    cy.getByTestId('ProfileCard.lastName').should('have.value', newLastName);
  });
});
