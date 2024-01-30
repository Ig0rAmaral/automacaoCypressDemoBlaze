/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://demoblaze.com/index.html')
});
describe('Automação do carrinho', () => {
    it.only('Adicionar item ao carrinho com sucesso', () => {
        cy.adicionaItemCarrinho()
    })
    it('Deletar item do carrinho com sucesso', () => {
        cy.deletaItemCarrinho()
    })
    it('Finalizar compra carrinho', () => {
        cy.finalizarCompraCarrinho()
    })
})