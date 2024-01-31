/// <reference types="Cypress" />
import selectors from "./selectors"
import faker from 'faker'
const randomName = (faker.name.findName())


Cypress.Commands.add('adicionaItemCarrinho' , () => {
    cy.get(selectors.primeiroItemLista)
    .should('be.visible')
    .click()
    cy.get(selectors.botaoAddToCart).click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Product added');
    })
    cy.get(selectors.botaoCart).click()
    cy.get(selectors.listaCarrinho).should('exist')
})

Cypress.Commands.add('deletaItemCarrinho' , () => {
    cy.get(selectors.primeiroItemLista)
    .should('be.visible')
    .click()
    cy.get(selectors.botaoAddToCart).click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Product added');
    })
    cy.intercept('https://api.demoblaze.com/view').as('esperaItemCarrinho')
    cy.get(selectors.botaoCart).click()
    cy.wait('@esperaItemCarrinho')
    cy.get(selectors.listaCarrinho).should('exist')
    cy.contains('a', 'Delete').click()
    cy.get(selectors.listaCarrinho).should('not.exist')
})

Cypress.Commands.add('finalizarCompraCarrinho' , () => {
    cy.get(selectors.primeiroItemLista)
    .should('be.visible')
    .click()
    cy.get(selectors.botaoAddToCart).click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Product added');
    })
    cy.intercept('https://api.demoblaze.com/view').as('esperaItemCarrinho')
    cy.get(selectors.botaoCart).click()
    cy.wait('@esperaItemCarrinho')
    cy.get(selectors.listaCarrinho).should('exist')
    cy.get(selectors.botaoPlaceOrder).click()
    cy.wait(500)
    cy.get(selectors.campoNamePlaceOrder).type(randomName)
    cy.get(selectors.campoCountryPlaceOrder).type('Brasil')
    cy.get(selectors.campoCityPlaceOrder).type('Salvador')
    cy.get(selectors.campoCardPlaceOrder).type('87654321')
    cy.get(selectors.campoMonthPlaceOrder).type('12')
    cy.get(selectors.campoYearPlaceOrder).type('2030')
    cy.get(selectors.botaoPurchasePlaceOrder).click()
    cy.contains('div', 'Thank you for your purchase!')
})