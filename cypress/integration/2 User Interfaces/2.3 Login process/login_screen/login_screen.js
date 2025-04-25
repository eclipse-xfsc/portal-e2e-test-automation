/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}/signin`)
});

Given('Anonymous user is at the signin page', () => {
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/signin')
      })
})

When('Anonymous user clicks on Register now link', () => {
    cy.contains('Register now')
      .click()
})

Then('Anonymous user is at register page', () => {
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/register')
      })
})

When('Anonymous user clicks on FAQ & Support link', () => {
    cy.contains('FAQ & Support')
      .click()
})

Then('Anonymous user is at help page', () => {
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/help')
      })
})

When('Anonymous user can see QR suggestion text', () => {
    cy.contains('Scan the QR code with your mobile device.')
})

And('Anonymous user is able to scan QR code', () => {

  cy.get('.login-block8')
    .and(($img) => {
      qrcode.scan($img[0].src)
            .then(result => {
              const expectedWallet = 'wallet://gaia-x.identity.ext:8081/mock_qr_link'
              expect(result.data).to.be.equal(expectedWallet)
              expect(result.data).to.be.not.empty

              cy.visit(result.data)
            })
    })
})

When('Anonymous user can see login button suggestion text', () => {
    cy.contains('click the login button')
})

And('TODO: Anonymous user clicks on login button', () => {
    cy.contains('TODO: implement "then step" when login button exists')
})

Then('TODO: Signed in user is at the <?> page', () => {
    cy.contains('TODO: implement "then step" when user clicked on login button or used QR code')
})

Given('Anonymous user is at the home page', () => {
    cy.visit(`${hostUrl}`)
})

When('Anonymous user clicks on link for another section of portal, {string}', (element) => {
    cy.contains(element)
      .click()
})

Then('Anonymous user sees and clicks the Sign In button', () => {
    cy.contains('Sign in')
      .click({ force: true })
})
