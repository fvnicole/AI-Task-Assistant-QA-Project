describe('Login Suite', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('TC01 — Happy Path - valid email and password', () => { 
    cy.fullLogin();

  });

  it('TC02 — Non registered email', () => {

   cy.get('#auth-email').type('InvalidMail@mail.com')
   cy.get('#auth-password').type('12345678')
   cy.get('[data-cy="auth-submit"]').click()
   cy.get('[data-cy="auth-error"]')
  .should('be.visible')
  .and('contain', 'Invalid credentials');   

  });

  it('TC03 — Wrong email format', () => {
    // ...
  });

  it('TC04 — Registered email + wrong password', () => {
   cy.get('#auth-email').type('Test01@mail.com')
   cy.get('#auth-password').type('5647891011')
   cy.get('[data-cy="auth-submit"]').click()
   cy.get('[data-cy="auth-error"]')
  .should('be.visible')
  .and('contain', 'Invalid credentials');

  });

  it('TC05 — Wrong email + wrong password', () => {
   
     cy.get('#auth-email').type('InvalidMail@mail.com')
   cy.get('#auth-password').type('5647891011')
   cy.get('[data-cy="auth-submit"]').click()
   cy.get('[data-cy="auth-error"]')
  .should('be.visible')
  .and('contain', 'Invalid credentials');

  });

  it('TC06 — Empty email field', () => {
    // ...
  });

  it('TC07 — Empty password field', () => {
    // ...
  });

  it('TC08 — Password < 8 characters', () => {
    // ...
  });

  it('TC09 — Both fields empty', () => {
    // ...
  });

});
