// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom commands for Cypress test automation.
// This file centralizes reusable actions such as login, navigation, and UI interactions.

Cypress.Commands.add('login', (email, password) => {
  cy.get('#auth-email').type(email);
  cy.get('#auth-password').type(password);
  cy.get('[data-cy="auth-submit"]').click();
});



Cypress.Commands.add('fullLogin', () => {

  // Load credentials from fixture
  cy.fixture('loginData').then((data) => {

    // Visit the base URL
    cy.visit('/');

    // Wait for the app to load
    cy.contains('AI Task Assistant', { timeout: 280000 })
      .should('be.visible');

    // Type email and password
    cy.get('#auth-email').type(data.email);
    cy.get('#auth-password').type(data.password);

    // Click the login button
    cy.get('[data-cy="auth-submit"]').click();

    // Validate that the correct user is logged in
    cy.contains(data.username, { timeout: 280000 })
      .should('be.visible');
  });
});
