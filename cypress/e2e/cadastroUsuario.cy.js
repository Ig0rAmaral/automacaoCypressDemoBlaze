/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('https://demoblaze.com/index.html')
});
describe('Automação DemoBlaze', () => {
  it('Cadastro com sucesso', () => {
    cy.cadastroComSucesso()
});
});
