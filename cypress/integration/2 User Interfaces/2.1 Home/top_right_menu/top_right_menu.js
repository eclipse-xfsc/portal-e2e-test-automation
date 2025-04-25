/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}`)
});

Given('User is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

When('User clicks {string} button', (button) => {

  switch (button) {
    case 'Register': 
      cy.get('#top-menu-register')
        .click()
      break;
    case 'Sign in': 
      cy.get('#top-menu-signin')
        .click()
      break;
    case 'Help': 
      cy.get('[href="/help"]').last()
        .click({force: true})
      break;
  } 
})

Then('User is at the {string} page', (expectedPage) => {
  cy.url().should('be.equal', `${hostUrl}/${expectedPage}`)
})
