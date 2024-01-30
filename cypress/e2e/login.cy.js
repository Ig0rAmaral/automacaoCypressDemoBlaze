/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://demoblaze.com/index.html')
});

describe('Automação DemoBlaze', () => {
    it('Login com sucesso', () => {
        cy.loginComSucesso()
    });
    it('Logout com sucesso', () => {
        cy.logoutComSucesso()
    });
    it.only('Login com senha incorreta', () => {
        cy.loginSenhaIncorreta()
    });
});