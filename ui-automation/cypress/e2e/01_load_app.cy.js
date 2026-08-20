describe('Cypress Demo - Load Application', () => {

  it('should load the application successfully', () => {
    cy.visit('https://example.cypress.io/');   // URL temporal para pruebas
    cy.contains('Sign in').should('be.visible');
  });

});
