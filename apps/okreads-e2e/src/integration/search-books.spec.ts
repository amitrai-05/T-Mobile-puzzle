describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });
  it('Then: I should be able to undo added book', () => {
    cy.get('input[type="search"]').type('react');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    //cy.get('[data-testing="want-to-read-button"]').should('not.be.disabled');
    cy.get('[data-testing="want-to-read-button"]').eq(0).should('not.be.disabled')
    cy.get('[data-testing="want-to-read-button"]').eq(0).click();
    cy.wait(1000);
    cy.contains('Undo').click();
    cy.get('[data-testing="want-to-read-button"]').should('not.be.disabled');
  });

  xit('Then: I should see search results as I am typing', () => {
    // TODO: Implement this test!
  });
});
