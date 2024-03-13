/// <reference types="Cypress" />

beforeEach(() => {
    cy.intercept('GET', '**/entries').as('esperaEntries')
    cy.visit('/')
    cy.wait('@esperaEntries')
});
describe('Automação das abas de categorias', () => {
    it('Listar telefones ao clicar na aba Phones', () => {
        cy.listaTelefonesAbaPhones()
    });
    it('Listar laptops ao clicar na aba Laptops', () => {
        cy.listaLaptopsAbaLaptops()
    });
    it('Listar monitores ao clicar na aba Monitors', () => {
        cy.listaLaptopsAbaLaptops()
    });
});
