/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Decoder } from '@nuintun/qrcode';

const hostUrl = Cypress.env("HOST")
const orgaDetails = require('../../../../../fixtures/attachments/organization_details/organization.json')
const qrcode = new Decoder();

Before(() => {
  cy.visit(`${hostUrl}`)
});

Given('User is not already registered', () => {
  // Delete created test organization from last test session in database
  cy.deleteTestOrganizationInDB()
})
 
Given('User is at the home page', () => {
  cy.url().should('be.equal', `${hostUrl}/`)
})

When('User clicks on Register link', () => {
  cy.get('#top-menu-register')
    .should('be.visible')
    .click({ force: true, timeout: 30000 })
})

And('User clicks on Organization radio button in overlay windows', () => {
  cy.get('[id=regOrganization]')
    .check()
})

And('User clicks on Cancel button', () => {
  cy.get('.formButtons')
    .get('button:contains("Cancel")')
    .should('be.enabled')
    .click()
})

And('User clicks Continue button', () => {
  cy.get('.formButtons')
    .get('button:contains("Continue")')
    .should('be.enabled')
    .should('be.visible', {timeout: 60000})
    .click() 
})

Then('User is not able to click Continue button', () => {
  cy.get('button:contains("Continue")')
    .should('be.disabled')
})

Then('User is on Step 2', () => {
  cy.url().should('be.equal', `${hostUrl}/register/organization`)
})

Then('User is on Step 3', () => {
  cy.url().should('be.equal', `${hostUrl}/register/email?formType=organization`)
  cy.contains('...almost done: please check your email inbox now. We have sent you a message with a confirmation link.')
})

And('User uploads organization details, {string}', (filePath) => {
  cy.get('input[type="file"]')
    .attachFile(filePath, {allowEmpty: true})
})

And('User completes organization field, {string}', (organization) => {
  cy.get('.registerInputs')
    .get('input[name=name]')
    .type(organization)
})

And('User clears organization field', () => {
  cy.get('.registerInputs')
    .get('input[name=name]')
    .clear()
})

And('User completes email field, {string}', (email) => {
  cy.get('.registerInputs')
    .get('input[name=email]')
    .type(email)
})

And('User clicks on checkbox for AISBL membership, {string}', (isCheckBoxClicked) => {
  if(Boolean(isCheckBoxClicked)){
    cy.get('.registerInputs')
      .get('[name="aisbl"]')
      .check()
  }
})

And('User clicks on Registration via DID button', () => {
  cy.get('.registerInputs')
    .get('button:contains("Registration via DID")')
    .click()
})

And('User sees QR code', () => {
  cy.get('.registerViaQrCode')
    .should('not.be.empty')
})

And('User scans QR code', () => {
  cy.get('.registerViaQrCode > img')
    .then(($img) => {
      qrcode.scan($img[0].src)
            .then(result => {
              const expectedWallet = 'wallet://gaia-x.identity.ext:8081/mock_qr_link'
              expect(result.data).to.be.equal(expectedWallet)
              expect(result.data).to.be.not.empty
            })
    })
})

And('User sees QR code', () => {
  cy.get('.registerViaQrCode')
  .should('not.be.empty')
})

Then('TODO System checks if user has Verifiable Credential', () => {
  // TODO
})

And('TODO User sees the Verifiable Credential', () => {
  // TODO
})

And('User clicks on I dont have a DID button', () => {
  cy.get('.registerInputs')
    .get("button:contains('I don't have a DID')")
    .click()
})

And('User sees list of Identity providers', () => {
  // WAITING ON DEV IMPLEMENTATION
  cy.get("WAITING ON DEV IMPLEMENTATION")
})

And('Each provider consists of a name and a link', () => {
  // WAITING ON DEV IMPLEMENTATION
  cy.get("WAITING ON DEV IMPLEMENTATION")
})

And('User clicks link in email', function () {
  // it's not possible to get the link out of the email, so the link will build here
  var emailAddr = orgaDetails.email
  cy.task("DATABASE", {
    dbConfig: Cypress.env("DB"),
    sql: `SELECT identifier FROM email_id_mapping WHERE email = '${emailAddr}';`
  }).then((result) => {
    let identifier = result.rows[0].identifier;
    console.log(identifier);

    cy.visit(`${hostUrl}/confirmation/organization/${identifier}`)
  })
})

Then('User gets confirming message', () => {
  let expectedMessage = "Thank's for confirming the email we've sent you. After submitting, your organization's details will be checked by the AISBL. You'll receive an email with your DID and Verified Credentials soon."
  cy.contains(expectedMessage)
})
