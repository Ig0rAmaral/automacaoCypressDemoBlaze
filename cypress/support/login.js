/// <reference types="Cypress" />
import faker from 'faker' 
import selectors from './selectors'
const randomName = (faker.name.findName())

Cypress.Commands.add ('loginComSucesso', () => {
    cy.get(selectors.botaoLogin).click()
    cy.wait(500)
    cy.get(selectors.campoUserNameLogin).type('ContaTeste3099')
    cy.get(selectors.campoPasswordLogin).type('123456')
    cy.get(selectors.botaoLogInLogin).click()
    cy.contains('a', 'Welcome ContaTeste3099')
})

Cypress.Commands.add ('logoutComSucesso', () => {
    cy.get(selectors.botaoLogin).click()
    cy.wait(500)
    cy.get(selectors.campoUserNameLogin).type('ContaTeste3099')
    cy.get(selectors.campoPasswordLogin).type('123456')
    cy.get(selectors.botaoLogInLogin).click()
    cy.contains('a', 'Welcome ContaTeste3099')
    cy.get(selectors.botaoLogout).click()
    cy.get(selectors.botaoLogin).should('exist')
})

Cypress.Commands.add ('loginSenhaIncorreta', () => {
    cy.get(selectors.botaoLogin).click()
    cy.wait(500)
    cy.get(selectors.campoUserNameLogin).type('ContaTeste3099')
    cy.get(selectors.campoPasswordLogin).type('654321')
    cy.get(selectors.botaoLogInLogin).click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Wrong password.');
    })
})