/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://demoblaze.com/index.html')
});
describe('Automação das abas de categorias', () => {
    Cypress._.times(10, () => {
    it('Listar telefones ao clicar na aba Phones', () => {
        cy.listaTelefonesAbaPhones()
    });
});
});