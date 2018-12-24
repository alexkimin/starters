describe('example E2E', () => {
  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true);
  });
});

describe('App E2E', () => {
  it('example', () => {
    cy.visit('/');

    cy.get('h1')
      .should('have.text', 'My Counter');
  });
});
