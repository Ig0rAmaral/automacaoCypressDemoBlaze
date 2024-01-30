// <reference types="Cypress" />
import selectors from '../support/selectors';
import faker from 'faker'
const randomName = (faker.name.findName())

Cypress.Commands.add('cadastroComSucesso',() => {
    cy.get(selectors.botaoSignUp)
    .should('be.visible')
    .click()
    cy.wait(500)
    cy.get(selectors.campoUserNameCadastro)
    .should('be.visible')
    .type(randomName)
    cy.get(selectors.campoPasswordCadastro).type('123456')
    cy.get(selectors.botaoSignUpCadastro).click()
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Sign up successful.');
    })
});

