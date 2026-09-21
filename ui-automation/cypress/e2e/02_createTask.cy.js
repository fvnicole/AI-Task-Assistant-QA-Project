describe('Create Task', () => {

  it('should allow the user to create a new task after logging in', () => {

    cy.fullLogin(); // Run the reusable login flow

    // Fill in the task creation form fields

cy.get('#title').type('My first automated task');  // Types the task title into the title input field
cy.get('#description').type('This task was created using Cypress.'); // Types the task description into the description input field
cy.get('#category').select('urgent'); // Selects the desired category from the category dropdown
cy.get('#priority').select('high'); // Selects the desired priority level from the priority dropdown


    // IMPORTANT:
    // The application briefly shows "Tasks (0 pending)" before the API finishes loading.
    // This "0" is NOT the real value — it's just the initial render.
    
    // Waiting 2 seconds ensures:
    // - The API has returned the REAL number of pending tasks
    // - We do NOT capture the temporary "0 pending"
    // - The initial count we read is accurate and stable
    cy.wait(2000);

    // Now safely read the initial number of pending tasks
    cy.contains('Tasks').invoke('text').then((textBefore) => {

      // Extract the number inside "Tasks (X pending)"
      const pendingBefore = parseInt(textBefore.match(/\d+/)[0]);

      // Click the "Add task" button to create the new task
      cy.get('[data-cy="create-button"]').click();

      //--Assertions--


      // Validate the temporary success message
      // The timeout ensures Cypress catches it even if it disappears quickly
      cy.get('[data-cy="create-success"]', { timeout: 5000 })
        .should('be.visible');

      // Read the number again after creating the task
      cy.contains('Tasks').invoke('text').then((textAfter) => {

        // Extract the updated number
        const pendingAfter = parseInt(textAfter.match(/\d+/)[0]);

        // Assert that the number increased by exactly 1
        // This confirms the task was successfully added to the list
        expect(pendingAfter).to.eq(pendingBefore + 1);
      });
    });
  });

});
