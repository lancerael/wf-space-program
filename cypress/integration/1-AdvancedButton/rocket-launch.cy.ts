describe('Rocket launch', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'))

  it('launches a rocket', () => {
    cy.contains('Api 1s response.').within(() => {
      cy.contains('Launch Rocket').should('exist')
      cy.get('[data-selector="wf-tooltip"]').should('not.exist')
      cy.get('button').trigger('mouseover')
      cy.contains('[data-selector="wf-tooltip"]', 'Ignites the fuel').should('exist')
      cy.get('button').click()
      cy.contains('Launching').should('exist')
      cy.get('button').trigger('mouseout')
      cy.get('[data-selector="wf-tooltip"]').should('not.exist')
      cy.get('button').trigger('mouseover')
      cy.contains('[data-selector="wf-tooltip"]', 'Cancel launch').should('exist')
      cy.contains('Launch Rocket').should('exist')
    })
  })

  it('cancels rocket launch', () => {
    cy.contains('Api 1s response.').within(() => {
      cy.get('button').click().click()
      cy.contains('[data-selector="wf-tooltip"]', 'Ignition error').should('exist')
    })
  })

})
