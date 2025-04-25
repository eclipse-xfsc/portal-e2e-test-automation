/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}`)
});

Given('User is at the home page', () => {
  cy.location().should((location) => {
    expect(location.pathname).to.eq('/')
  })
})

When('User clicks on {string}', (element) => {
  cy.get(`a:contains(${element})`)
    .click()
})

And('User clicks on Gaia-x logo image', () => {
  cy.get('[alt="Gaia-x logo image"]')
    .click()
})

Then('User is at the {string} page', (expectedPage) => {
  switch (expectedPage) {
    default: 
        cy.location().should((location) => {
          expect(location.pathname).to.eq(`/${expectedPage}`)
        })
  }
})
