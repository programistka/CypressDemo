describe('ToDo test', () => {
    it('Shows empty list of ToDos on start', () => {
        cy.visit('http://localhost:3000');
        cy.get('ul');
        cy.get('li').should('not.exist');
    });

    it('Shows item on the list after adding', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[type=text]').type('ToDo 1');
        cy.get('button').click();
        cy.get('ul');
        cy.get('ul > li').should('contain', 'ToDo 1');
    });

    it('Removes item from the list when marked as done', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[type=text]').type('ToDo 1');
        cy.get('button').click();
        cy.get('ul');
        cy.get('li > button').click();
        cy.get('li').should('not.exist');
    });
});
