/// <reference types="Cypress" />

beforeEach(() => {
    cy.intercept('GET', '**/entries').as('esperaEntries')
    cy.visit('https://demoblaze.com/index.html')
    cy.wait('@esperaEntries')
});
describe('Automação DemoBlaze', () => {
    it('Login com sucesso', () => {
        cy.loginComSucesso()
    });
    it('Logout com sucesso', () => {
        cy.logoutComSucesso()
    });
    it('Login com senha incorreta', () => {
        cy.loginSenhaIncorreta()
    });
});