/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const hostEdgeServiceUrl = Cypress.env("HOST_EDGE_SERVICE")

Before(() => {
  cy.visit(`${hostUrl}`)
  cy.intercept(`${hostEdgeServiceUrl}/api/authstatus`, "FAIL")
});

Given('Anonymous user is at the home page', () => {
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/')
      })
})

Then('Anonymous user sees Login failed message', () => {
    cy.contains('You need to install a wallet browser extension to login with your credentials.', 
        { timeout: 30000 })
})

And('Anonymous user clicks Sign in button', () => {
    cy.contains("Sign in")
      .click()
})

And('Anonymous user clicks Login button', () => {
    cy.get('.login-button', { timeout: 15000 })
})

When('Anonymous user clicks Close button', () => {
    cy.contains('Close')
      .click()
})

When('Anonymous user resizes browser', () => {
    let resizeEventFired = false;
    cy.window().then(win => {
        win.addEventListener('resize', () => {
            resizeEventFired = true;
        })
    })

    cy.viewport(450, 450)
    cy.wrap().should(() => {
        expect(resizeEventFired).to.eq(true);
    })
})

Then('Shown failed message text wraps', () => {
    cy.screenshot('Chapter 2.3 - Wrapped failed login message')
})
