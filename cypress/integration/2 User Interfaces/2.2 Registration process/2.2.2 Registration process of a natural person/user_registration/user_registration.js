/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Decoder } from '@nuintun/qrcode';
const qrcode = new Decoder();
const hostUrl = Cypress.env("HOST")

Before(() => {
  cy.visit(`${hostUrl}`)
});

Given('User is not already registered', () => {
  // Delete created test user from last test session in database
  cy.deleteTestUserInDB()
})

Given('User is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

When('User clicks on Register link', () => {
  cy.get('#top-menu-register')
    .should('be.visible')
    .click({ force: true, timeout: 30000 })
})

And('User clicks on User radio button in overlay windows', () => {
  cy.get('[id=regUser]')
    .check()
})

And('User clicks on Cancel button', () => {
  cy.get('.formButtons')
    .get('button:contains("Cancel")')
    .should('be.enabled')
    .click()
})

And('User completes sur and last name, {string}, {string}', (surname, lastname) => {
  cy.get('.registerInputs')
    .get('input[name=firstname]')
    .type(surname)
    .get('input[name=lastname]')
    .type(lastname)
})

And('User completes email, {string}', (email) => {
  cy.get('.registerInputs')
    .get('input[name=email]')
    .type(email)
})

And('User completes phone number, {string}', (phone) => {
  cy.get('.registerInputs')
    .get('input[name=phone_number]')
    .type(phone)
})

And('User completes address, {string}, {string}, {string}, {string}', (street, zip, city, country) => {
  cy.get('.registerInputs')
    .get('input[name=street_number]')
    .type(street)
    .get('input[name=zip]')
    .type(zip)
    .get('input[name=city]')
    .type(city)
    .get('input[name=country]')
    .type(country)
})

And('User clicks Continue button', () => {
  cy.get('.formButtons')
  cy.get('.registerInputs')
  .get('button:contains("Continue")')
  .should('be.enabled')
  .should('be.visible')
  .click() 
})

And('User clicks on Registration via DID button', () => {
  cy.get('.registerFormUser')
    .get('button:contains("Registration via DID")')
    .click()
})

And('User sees and scans QR code', () => {
  cy.get('.registerViaQrCode')
    .should('not.be.empty')

  cy.get('.registerViaQrCode > img')
    .and(($img) => {
      qrcode.scan($img[0].src)
            .then(result => {
              const expectedWallet = 'wallet://gaia-x.identity.ext:8081/mock_qr_link'
              expect(result.data).to.be.equal(expectedWallet)
              expect(result.data).to.be.not.empty
            })
    })
})

Then('User gets information about invalid data', () => {
  cy.get('input:invalid').should('have.length', 1)
})

Then('User is on Step 2', () => {
  cy.url()
    .should('be.equal', `${hostUrl}/register/user`) 
})

Then('User is on Step 3', () => {
  cy.url()
    .should('be.equal', `${hostUrl}/register/email?formType=user`)
  cy.contains('...almost done: please check your email inbox now. We have sent you a message with a confirmation link.')
})

And('User clicks link in email, {string}', (emailAddr) => {
  // it's not possible to get the link out of the email, so the link will build here
  cy.task("DATABASE", {
    dbConfig: Cypress.env("DB"),
    sql: `SELECT identifier FROM email_id_mapping WHERE email = '${emailAddr}';`
  }).then((result) => {

    let identifier = result.rows[0].identifier;
    console.log(identifier);

    cy.visit(`${hostUrl}/confirmation/user/${identifier}`)
  })
})

Then('User gets confirming message', () => {
  let expectedMessage = "Thank's for confirming the email we've sent you. After submitting, your organization's details will be checked by the AISBL. You'll receive an email with your DID and Verified Credentials soon."
  cy.contains(expectedMessage)
})
