/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}`)
});
 
Given('Registered provider is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

When('Registered provider signs in', () => {
  cy.get('[id="top-menu-signin"]')
    .click()
  cy.get('.login-button')
    .click({force: true})
})

And('TODO Logged in provider clicks on his avatar in the header', () => {
  // TODO implement this step correctly so soon its possible
  cy.visit(`${hostUrl}/account/provider/details`)
})

And('TODO Logged in provider clicks on My Account', () => {
  // TODO implement this step correctly so soon its possible
})

Then('Logged in provider is at the My Account page', () => {
  cy.url().should('be.equal', `${hostUrl}/account/provider/details`)
  cy.contains("My Account")
})

And('Logged in provider is directed to the Details view', () => {
  cy.get('.provider-account-details')
})

And('Logged in provider sees Details, Login History, Credentials tabs', () => {
  cy.get('.provider-account-details_tab')
    .should('contain', 'Details')
    //.should('contain', 'Login History')
    .should('contain', 'Log History')
    .should('contain', 'Credentials')
})

And('Logged in provider sees his basic data and detailed informations', () => {
  // TODO before load data from database
  cy.get('.provider-account-details_info')
    // Basic Data
    .should('contain', 'Email Address')
    .should('contain', 'Company Name')
    .should('contain', 'Commercial Register')
    .should('contain', 'Registered Address')
    .should('contain', 'Website')
    .should('contain', 'Individual Contact')
    // Details
    .should('contain', 'Certifications')
    .should('contain', 'Alias')
    .should('contain', 'Local Attestation')
    .should('contain', 'Transparency Register')
    .should('contain', 'D-U-N-S Number')
    .should('contain', 'Legal Entity Identifier')
    .should('contain', 'Data Provider Officer')
    
  // TODO verify it with data on page
})

When('Logged in provider clicks on Edit account', () => {
  cy.contains("Edit account")
    .click({ force: true })
})

Then('Logged in provider sees upload button and description', () => {
  cy.contains("Upload")
  cy.contains("Please upload your new self description.")
})

When('Logged in provider uploads his account details as file, {string}', (filePath) => {
  cy.get('input[type="file"]')
    .attachFile(filePath, {allowEmpty: true})
})

Then('TODO Logged in provider request is saved into the database and in the state To be approved', () => {
  // TODO
  cy.get("TODO")
})

When('Logged in provider clicks Cancel button', () => {
  cy.contains("Cancel")
    .click({ force: true })
})

When('Logged in provider clicks on Login History tab', () => {
  cy.contains("Log History")
  //cy.contains("Login History")
    .click({ force: true })
})

Then('TODO Logged in provider sees login date, time and provider name', () => {
  // TODO before load data from database
  cy.get('.provider-history-container')
    .should('contain', 'Date')
    .should('contain', 'Time')
    .should('contain', 'Name')
  // TODO verify it with data on page
})

When('Logged in provider clicks on Credentials tab', () => {
  cy.contains('Credentials')
    .click({ force: true })
})

Then('TODO Logged in provider sees user names and roles', () => {
  // TODO before load data from database
  cy.contains('Name')
  cy.contains('Role')
  // TODO verify it with data on page
})

When('Logged in provider clicks Add user button', () => {
  cy.contains("Add user")
    .click({ force: true })
})

const firstName = "Hans"
const lastName = "Franz"
const mail = "hans.franz@gmx.de"

And('Logged in provider inserts user name, role and email addr', () => {
  cy.get('input[name=firstName]')
  .type(`${firstName}`)
  cy.get('input[name=lastName]')
  .type(`${lastName}`)
  cy.get('input[name=email]')
    .type(`${mail}`)
  cy.get('select[name="role"]').select('PPR_USER').should('have.value', 'PPR_USER')
  cy.get('select[name="role"]').select('PPR_EDITOR').should('have.value', 'PPR_EDITOR')
})

And('Logged in provider clicks Save button', () => {
  cy.contains('Save')
    .should('not.be.disabled')
    .click()
})

Then('TODO Logged in provider sees new user in user list', () => {
  //cy.get('input[name=firstName]').should( items => {
  //  let lastItem = items.pop()
  //  expect(lastItem.la).to.contain.value(`${firstName}`)
  //})

  cy.get(".sc-idiyUo").last().click()

  cy.get('input[name=firstName]').should('have.value', `${firstName}`)

  cy.get('input[name=lastName]').should('have.value', `${lastName}`)

  cy.get('input[name=email]').should('have.value', `${mail}`)
  
  // TODO add check for new user in database
})

And('Logged in provider clicks Edit button for first user', function() {
  cy.get(".sc-idiyUo").its(1).click()

  cy.contains("Edit").click()
})

const newFirstName = "Hans"
const newLastName = "Franz"
const newMail = "hans.franz@gmx.de"

And('Logged in provider changes name and role', () => {

  cy.get('input[name=firstName]').clear().type(`${newFirstName}`)

  cy.get('input[name=lastName]').clear().type(`${newLastName}`)

  cy.get('input[name=email]').clear().type(`${newMail}`)

  cy.get('select[name="role"]').select('PPR_USER').should('have.value', 'PPR_USER')
})

Then('TODO Logged in provider sees edited user in user list', () => {
  cy.get('input[name=firstName]').should('have.value', `${newFirstName}`)

  cy.get('input[name=lastName]').should('have.value', `${newLastName}`)

  cy.get('input[name=email]').should('have.value', `${newMail}`)

  cy.get("TODO")
  // TODO add check for new user in database
})

And('Logged in provider selects the last user', () => {
  cy.get(".sc-idiyUo").last().click()
})

And('Logged in provider clicks Remove button', () => {
  cy.contains("Remove").click()
})

Then('Logged in provider sees Remove User popup', () => {
  cy.contains("Remove user")
  cy.contains("are you sure do you want to remove")
})

And('Logged in provider clicks Remove button in popup', () => {
  cy.get(`button:contains("Remove")`).click()
})

Then('Logged in provider removed user in user list', () => {
  cy.get(".sc-idiyUo").last().click()

  cy.get('input[name=firstName]').should('not.have.value', `${firstName}`)

  cy.get('input[name=lastName]').should('not.have.value', `${lastName}`)

  cy.get('input[name=email]').should('not.have.value', `${mail}`)
})

When('Logged in provider clicks on Remove Account button', () => {
  cy.contains('Remove Account')
    .click({ force: true })
})

Then('Logged out provider isnt able to sign in again', () => {
  cy.visit(`${hostUrl}`)

  cy.get('[id="top-menu-signin"]')
    .click({force: true})
  
  cy.contains('Login')
    .click({force: true})

  cy.contains('Login failed')
}) 
