describe('Cypress Demo - Load Application', () => {

  it('should load the application successfully', () => {
    cy.visit('https://ai-task-assistant-cl-v2.onrender.com/');   // URL temporal para pruebas
    cy.contains('AI Task Assistant').should('be.visible');
  });

});
