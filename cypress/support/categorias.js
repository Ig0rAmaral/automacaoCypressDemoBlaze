/// <reference types="Cypress" />

Cypress.Commands.add('listaTelefonesAbaPhones' , () => {
    cy.intercept('GET', '**/entries').as('esperaEntries')
    cy.wait('@esperaEntries')
    cy.contains('a', 'Phones').should('be.visible').click({multiple: true})
})