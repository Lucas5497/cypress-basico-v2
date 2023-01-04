/// <reference types="cypress" />

/*
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
*/

describe("Teste da central de atendimento ao cliente", () => {
  beforeEach(() => {
    cy.visit("../src/index.html");
  })

  it("Verificar o título da aplicação", () => {
    
    cy.title()
      .should('to.equal', 'Central de Atendimento ao Cliente TAT');
  })


  it("Insere dados no formulário", () => {
    cy.get('input.firstname').type('Lucas')

  })

  it.each("meu primeiro teste", () => {})
})