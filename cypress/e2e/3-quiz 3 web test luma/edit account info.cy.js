describe('Edit Account Information', () => {
  it('should allow the user to edit account information', () => {
    // Visit the Magento website
    cy.visit('https://magento.softwaretestingboard.com/customer/account/index/');

    // Assuming there's a link or button to navigate to the login page
    cy.contains('Sign In').click();

    // Assuming there are login form fields
    cy.get('#email').type('your@email.com');
    cy.get('#pass').type('yourpassword');

    // Assuming there's a login button
    cy.get('button[title="Sign In"]').click();

    // Now, navigate to the account information page
    cy.contains('Account Information').click();

    // Assuming there are form fields for editing account information
    cy.get('#firstname').clear().type('New First Name');
    cy.get('#lastname').clear().type('New Last Name');

    // Assuming there's a save button
    cy.contains('Save Account Information').click();

    // You might want to add assertions to ensure the changes were saved
    cy.contains('The account information has been saved.').should('exist');
  });
});
