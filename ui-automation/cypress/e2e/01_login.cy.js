describe('Create Task - Authenticated Flow', () => {

  it('Run the Login located in Commands.js ', () => {

   
    cy.fullLogin();


  });

});



//OLD LOGIN (NON REUSABLE)
/*
// Main test block.
// Groups all tests related to handling slow application startup.
describe('Load App - Slow Startup Handling', () => {

  // Verifies that the application loads correctly even when startup is slow.
  it('should load the application even if startup is slow', () => {

    // Loads external test data from: ui-automation/cypress/fixtures/loginData.json
    // This allows using dynamic credentials instead of hardcoding them.
    cy.fixture('loginData').then((data) => {

      // Increases the default command timeout ONLY for this test, because the first access to Render could be slow.
       Cypress.config('defaultCommandTimeout', 280000);

      // Opens the application using the baseUrl defined in: ui-automation/cypress.config.js
      // cy.visit('/') automatically resolves to the full baseUrl.
      cy.visit('/', { timeout: 280000 });

      // Confirms that the main login page has loaded by checking for the presence of the "AI Task Assistant" text.
      // Uses an extended timeout in case the UI renders slowly.
      cy.contains('AI Task Assistant', { timeout: 280000 })
        .should('be.visible');

      // Executes the custom login command defined in: ui-automation/cypress/support/commands.js
      // cy.login(email, password) types the credentials and clicks "Log in".
      cy.login(data.email, data.password);
      cy.contains(data.username, { timeout: 280000 }) // Validate User Name after Login
        .should('be.visible');
    });
  });

});
*/


