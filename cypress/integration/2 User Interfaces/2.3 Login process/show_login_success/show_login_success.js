import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const hostEdgeServiceUrl = Cypress.env("HOST_EDGE_SERVICE")

Before(() => {
  cy.visit(`${hostUrl}`)
  cy.intercept(`${hostEdgeServiceUrl}/api/authstatus`, "SUCCESS")
});


Given('Registred user is at the home page', () => {
  cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
})

Given('Registred user goes on sign in page', () => {
  cy.get(`button:contains(Sign in)`)
    .click({force: true})
})

When('Registred user clicks on Login button', () => {
    cy.get('.login-button')
      .click({ force: true })
  })

And('Registred user sees Sign out button', () => {
    cy.contains("Sign out", {timeout: 10000})
})

And('Registred user cant see Sign in button anymore', () => {
  cy.get('.App')
  .should('button:not.contain', 'Sign in')
})

When('Registred user clicks on Sign out button', () => {
  cy.get(`button:contains(Sign out)`)
    .click({ force: true })
})

Then('TODO Registred user sees an icon or name', () => {
  cy.contains("User", {timeout: 10000})
  // TODO add user name validation 
})

Then('TODO Registred user role is displayed for mouseover', () => {
  cy.get('.menu-item').trigger('mouseover')
  // or
  // cy.get('.popover').should('be.visible')

  // TODO add user role validation 
})
