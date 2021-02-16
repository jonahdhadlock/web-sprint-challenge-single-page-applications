describe('submit button works', () => {
    it('navigation to website', () => {
        cy.visit('http://localhost:3001/')
        cy.url().should('include', 'localhost')
    })
    it('form loads properly', () => {
        cy.get('form')
        cy.get('[type="text"]')
        cy.get('[type="email"]')
        cy.get('[type="tel"]')
        cy.get('a')
        cy.get('[type="checkbox"]')
        cy.get('[type="radio"]')
        cy.get('[form="usrform"]')
        cy.get([name="size"])
        cy.get('button')
        cy.get([name = "cheese"])
        cy.get([name = "pepperoni"])
        cy.get([name="onion"])
    })
    it('form inputs are empty', () => {
        cy.get('[type="text"]').should('be.empty')
        cy.get('[type="email"]').should('be.empty')
        cy.get('[type="tel"]').should('be.empty')
        cy.get('[type="checkbox"]').should('not.be.checked')
        cy.get('button').should('be.disabled')
    })
    it('entered name data is valid', () => {
        cy.get('[type="text"]').type('Jonah').should('have.value', 'Jonah')
    })
    it('entered email data is valid', () => {
        cy.get('[type="email"]').type('example@email.com').should('have.value', 'example@email.com')
    })
    it('entered telephone data is valid', () => {
        cy.get('[type="tel"]').type('(385) 123-4567').should('have.value', '(385) 123-4567')
    })
    it('entered checkbox data is valid', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('#cheese').check()
        cy.get('#pepperoni').check()
        cy.get('#onion').check()
    })
    it('entered submit button data is valid', () => {
        cy.get('button').should('not.be.disabled')
    })
});