/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}`)
});
 
Given('Registered user is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

Given('Anonymous user is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

When('Registered user signs in', () => {
  cy.contains('Sign in')
    .click({timeout: 5000})

  cy.get('.login-button')
    .click({ force: true })
})

And('TODO Logged in user clicks on his avatar in the header', () => {
  // TODO
  cy.get("TODO")
})

And('TODO Logged in user clicks on My Account', () => {
  // TODO
  cy.get("TODO")
})

Then('Logged in user is at the My Account page', () => {
  cy.url().should('be.equal', `${hostUrl}/account/details`)
  cy.contains("My Account")
})

And('Logged in user sees Details and Login History tabs', () => {
  cy.get('.provider-account-details_tab')
    .should('contain', 'Details')
    .should('contain', 'Login History')
})

When('Anonymous user goes on My Account via link', () => {
  cy.visit(`${hostUrl}/account/details`)
})

Then('Anonymous user has no access to My Account page', () => {
  cy.get('.provider-account-details_tab')
    .should('not.contain', 'Details')
    .should('not.contain', 'Login History')
})

Then('Logged in user is directly on his Details tab', () => {
  cy.url().should('be.equal', `${hostUrl}/account/details`)
})

And('TODO Logged in user sees his email addr, name and attributes', () => {
  // TODO before load data from database
  cy.get('.account-pane-details')
    .should('contain', 'Email Address')
    .should('contain', 'First Name')
    .should('contain', 'Last Name')
    .should('contain', 'Attribute of VC')
  // TODO verify it with data on page
  cy.get("TODO")
})

When('Logged in user clicks on Login History tab', () => {
  cy.get("Login History")
    .click({ force: true }) 
})

Then('TODO Logged in user sees login date and time', () => {
  // TODO before load data from database
  cy.get('.aaccount-pane-loginhistory')
    .should('contain', 'Date')
    .should('contain', 'Time')
  // TODO verify it with data on page
  cy.get("TODO")
})
