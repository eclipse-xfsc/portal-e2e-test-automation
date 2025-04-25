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
  cy.get('.searchBarComponent')
    .get(`button:contains(${button})`)
    .should('be.visible')
    .click()
})

Then('{string} appears in search element', (expectedValue) => {
    switch (expectedValue) {
      case 'nothing': 
        cy.get('.searchBarComponent')
        .get('#searchElement')
        .should('contain.value', '')
      break;
      default: 
        cy.get('.searchBarComponent')
        .get('#searchElement')
        .should('contain.value', expectedValue)
    }  
})


Then('All filter elements appears in search element', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .should('contain.value', 'NOT=')
    .should('contain.value', 'Provider=') 
    .should('contain.value', 'Storage=') 
    .should('contain.value', 'Service=') 
    .should('contain.value', 'Compute=') 
})

When('User clicks no button', () => {
  cy.log('User did nothing')
})

Then('Search element should be empty', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .should('contain.value', '')
})

And('User writes something into the search bar', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .type("something")
})

And('User clicks "Advanced" button', () => {
  cy.get('.searchBarComponent')
    .get('button:contains("Advanced")')
    .should('be.visible')
    .click()
  cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Under construction')
  })
})

And('User writes something into the search bar and presses ENTER', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .type("something{enter}")
  cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Starting search')
  })
})


And('User writes something into the search bar and clicks search symbol', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .type("something")
  cy.get('[class="fa fa-search"]')
    .click()
  cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Starting search')
  })
})

Then('Alert window pops up', () => {
  cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('')
  })
  cy.log("Alert window did really pops up, trust me!")
})

And('User writes something into the search bar that shouldnt exists and presses ENTER', () => {
  cy.get('.searchBarComponent')
    .get('#searchElement')
    .type("yiqie du shi huangyan.!!11110`?/{enter}")
})

Then('Message bar shows that no results could be found', () => {
  cy.get('.home-messageBar')
    .should("have.text", "Oh no! We couldn't find any results.")
})
