describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('en').click()
    cy.contains('Bien gérer efficacement votre stock !')
    cy.contains('.button', 'Voir le stock').click()
    cy.get('input[name="login"]').clear().type('jc')
    cy.contains('button', 'Se connecter').click()
  })
})
