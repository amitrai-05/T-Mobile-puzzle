describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should be able to undo removed book', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-item"]').should("have.length.greaterThan",0);
    cy.get('[data-testing="remove-book-button"]').first().click();
    cy.wait(1000);
    //cy.get('[data-testing="remove-book-button"]').contains('undo').click();
    cy.contains('Undo').click();
    cy.get('[data-testing="reading-list-item"]').should("have.length.greaterThan",0);
  });

});
