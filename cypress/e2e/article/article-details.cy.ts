let articleId = '';

describe('Going to article details page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.createArticle().then((data) => {
        articleId = data.id;
        cy.visit(`/articles/${articleId}`);
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
      });
    });
  });
  afterEach(() => {
    cy.login().then(() => {
      cy.deleteArticle(articleId);
    });
  });

  it('Article details content loads successfully', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Article recommendations load successfully', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it.skip('Comment is left successfully', () => {
    cy.getByTestId('AddCommentForm').scrollIntoView();
  });
});
