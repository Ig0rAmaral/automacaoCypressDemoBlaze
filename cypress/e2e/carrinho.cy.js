/// <reference types="Cypress" />

beforeEach(() => {
    cy.intercept('GET', '**/entries').as('esperaEntries')
    cy.visit('/')
    cy.wait('@esperaEntries')
});
describe('Automação do carrinho', () => {
    it('Adicionar item ao carrinho com sucesso', () => {
        cy.adicionaItemCarrinho()
    })
    it('Deletar item do carrinho com sucesso', () => {
        cy.deletaItemCarrinho()
    })
    it('Finalizar compra carrinho', () => {
        cy.finalizarCompraCarrinho()
    })
})
