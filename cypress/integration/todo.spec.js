describe('ToDo test', () => {
    it('Shows empty list of ToDos on start', () => {
        cy.visit('http://localhost:3000');
        cy.get('li').should('not.exist');
    });

    it('Shows item on the list after adding', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name=addTodoInput]').type('ToDo 1');
        cy.get('button[name=addTodoButton]').click();
        cy.get('ul > li').should('contain', 'ToDo 1');
    });

    it('Removes item from the list when marked as done', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name=addTodoInput]').type('ToDo 1');
        cy.get('button[name=addTodoButton]').click();
        cy.get('button[name=removeTodoButton]').click();
        cy.get('li').should('not.exist');
    });
});
