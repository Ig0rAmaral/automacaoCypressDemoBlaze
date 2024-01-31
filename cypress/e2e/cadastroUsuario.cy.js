/// <reference types="Cypress" />

beforeEach(() => {
  cy.intercept('GET', '**/entries').as('esperaEntries')
  cy.visit('https://demoblaze.com/index.html')
  cy.wait('@esperaEntries')
});
describe('Automação DemoBlaze', () => {
  it('Cadastro com sucesso', () => {
    cy.cadastroComSucesso()
  });
});
