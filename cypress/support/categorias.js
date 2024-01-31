/// <reference types="Cypress" />

Cypress.Commands.add('listaTelefonesAbaPhones' , () => {
    cy.intercept('POST', '**/bycat').as('listaPhones')
    cy.contains('a', 'Phones')
    .should('be.visible')
    .click()
    cy.wait('@listaPhones')
    cy.get('#tbodyid')
    .find('div')
    .should(($div) => {
        expect($div).to.have.length(21)
    })
})
    
Cypress.Commands.add('listaLaptopsAbaLaptops' , () => {
    cy.intercept('POST', '**/bycat').as('listaLaptops')
    cy.contains('a', 'Laptops')
    .should('be.visible')
    .click()
    cy.wait('@listaLaptops')
    cy.get('#tbodyid')
    .find('div')
    .should(($div) => {
        expect($div).to.have.length(18)
    })
})

Cypress.Commands.add('listaLaptopsAbaLaptops' , () => {
    cy.intercept('POST', '**/bycat').as('listaLaptops')
    cy.contains('a', 'Laptops')
    .should('be.visible')
    .click()
    cy.wait('@listaLaptops')
    cy.get('#tbodyid')
    .find('div')
    .should(($div) => {
        expect($div).to.have.length(18)
    })
})