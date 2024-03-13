/// <reference types="Cypress" />

beforeEach(() => {
  cy.intercept('GET', '**/entries').as('esperaEntries')
  cy.visit('/')
  cy.wait('@esperaEntries')
});
describe('Automação DemoBlaze', () => {
  it('Cadastro com sucesso', () => {
    cy.cadastroComSucesso()
  });
});
