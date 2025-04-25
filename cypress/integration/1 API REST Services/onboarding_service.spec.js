/// <reference types="Cypress" />
//import { organizationRegistrationSchema } from "../../schemas/organizationRegistration";
//import { userRegistrationSchema } from "../../schemas/userRegistration";
import {v4 as uuidv4} from 'uuid';

// Testsuite to test implementation of the onboarding backend service
// GAIAXPORTAL-27

describe('Send serveral requests to onboarding service', () => {

  const hostUrlOS = Cypress.env("HOST_ONBOARDING_SERVICE")

  beforeEach(() => {
    cy.fixture('organizationRegistration.json').as('orgRegBody')
    cy.fixture('userRegistration.json').as('userRegBody')
  })

  it('POST /onboarding/register/organization, HttpStatus 200', function() {

    // Delete created test organization from last test session in database
    cy.deleteTestOrganizationInDB()

    var requestBody = this.orgRegBody

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it('POST /onboarding/register/organization, send no requestBody, HttpStatus 400', function() {

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/organization, aisbl: invalid value, HttpStatus 400', function() {

    var requestBody = this.orgRegBody
    requestBody.aisbl = 1234

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      body: requestBody,
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/organization, email: invalid value, HttpStatus 400', function() {

    var requestBody = this.orgRegBody
    requestBody.email = "invalid"

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      body: requestBody,
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/organization, registration_state: invalid value, HttpStatus 400', function() {

    var requestBody = this.orgRegBody
    requestBody.registration_state = 1234

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      body: requestBody,
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('GET /onboarding/register/organization/confirm_email, HttpStatus 204', function() {

    // Delete created test organization from last test session in database
    cy.deleteTestOrganizationInDB();

    var requestBody = this.orgRegBody

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization',
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      
      var selectedTesterEmail = `SELECT email FROM organization WHERE name LIKE 'Test%' ORDER BY id LIMIT 1`

      cy.task("DATABASE", {
        dbConfig: Cypress.env("DB"),
        sql: `SELECT identifier FROM email_id_mapping WHERE email = (${selectedTesterEmail});`
      }).then((result) => {

        let confirmUUID = result.rows[0].identifier;
        console.log(confirmUUID);

        cy.request({
          method: 'GET',
          url: hostUrlOS + '/onboarding/register/organization/confirm_email',
          qs: {
            uniqueId: confirmUUID
          },
        }).as('response')
        cy.get('@response')
          .its('status')
          .should('equal', 200)
      })
  })

  it('GET /onboarding/register/organization/confirm_email, HttpStatus 400', () => {

    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/confirm_email',
      qs: {
        uniqueId: "invalid"
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: POST /onboarding/register/organization/confirm_registration, HttpStatus 204', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/confirm_registration',
      qs: {
        sessionInfo:  {}
      },
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('POST /onboarding/register/organization/confirm_registration without query param, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/confirm_registration',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/organization/confirm_registration with unknown query param, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/confirm_registration',
      qs: {
        invalidParam:  {}
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/organization/confirm_registration with invalid value, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/confirm_registration',
      qs: {
        sessionInfo:  -1
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: GET /onboarding/register/organization/creds_missing, HttpStatus 204', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/creds_missing',
      qs: {
        sessionInfo:  {}
      },
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('GET /onboarding/register/organization/creds_missing without query param, HttpStatus 400', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/creds_missing',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('GET /onboarding/register/organization/creds_missing with unknown query param, HttpStatus 400', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/creds_missing',
      qs: {
        invalidParam:  {}
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('GET /onboarding/register/organization/creds_missing with invalid value, HttpStatus 400', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/creds_missing',
      qs: {
        sessionInfo:  -1
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: GET /onboarding/register/organization/did_register, HttpStatus 200', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/did_register'
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it.skip('TODO: POST /onboarding/register/organization/finish_registration, HttpStatus 204', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/finish_registration',
      qs: {
        email: "portal@test.de",
        sessionInfo:  {}
      }
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('POST /onboarding/register/organization/finish_registration without sessionInfo, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/finish_registration',
      qs: {
        email: "portal@test.de"      
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: POST /onboarding/register/organization/finish_registration without an email query param, HttpStatus 400', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/finish_registration',
      qs: {
        sessionInfo: {}      
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: POST /onboarding/register/organization/finish_registration with invalid email, HttpStatus 400', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/finish_registration',
      qs: {
        email: "portaltest.de",
        sessionInfo: {}      
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: GET /onboarding/register/organization/no_did, HttpStatus 204', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/organization/no_did'
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it.skip('TODO: POST /onboarding/register/organization/status, HttpStatus 204', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/status',
      qs: {
        did: {}      
      }
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('POST /onboarding/register/organization/status without did query param, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/organization/status',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/user, HttpStatus 200', function() {

    // Delete created test user from last test session in database
    cy.deleteTestUserInDB()

    var requestBody = this.userRegBody

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user',
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it('POST /onboarding/register/user, send no requestBody, HttpStatus 400', function() {

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/user, email: invalid value, HttpStatus 400', function() {

    var requestBody = this.userRegBody
    requestBody.email = "invalid"

    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user',
      body: requestBody,
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('GET /onboarding/register/user/confirm_email, HttpStatus 204', function() {

    // Delete created test user from last test session in database
    cy.deleteTestUserInDB()

    var requestBody = this.userRegBody

    // Create new test user in DB
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user',
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      
      var selectedTesterEmail = `SELECT email FROM user_reg WHERE firstname LIKE 'Test%' ORDER BY id LIMIT 1`

      // Select userId for email address
      cy.task("DATABASE", {
        dbConfig: Cypress.env("DB"),
        sql: `SELECT identifier FROM email_id_mapping WHERE email = (${selectedTesterEmail});`
      }).then((result) => {

        let confirmUUID = result.rows[0].identifier;
        console.log(confirmUUID);

        // Confirm email for test user
        cy.request({
          method: 'GET',
          url: hostUrlOS + '/onboarding/register/user/confirm_email',
          qs: {
            uniqueId: confirmUUID
          },
        }).as('response')
        cy.get('@response')
          .its('status')
          .should('equal', 204)
      })
  })

  it('GET /onboarding/register/user/confirm_email, uniqueId: invalid value, HttpStatus 400', () => {

    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/user/confirm_email',
      qs: {
        uniqueId: "invalid"
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: POST /onboarding/register/user/confirm_registration, HttpStatus 204', () => {
    // TODO: not yet known how request and response will looks like
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user/confirm_registration',
      qs: {
        sessionInfo:  {}
      },
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('POST /onboarding/register/user/confirm_registration without query param, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user/confirm_registration',
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/user/confirm_registration with unknown query param, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user/confirm_registration',
      qs: {
        invalidParam:  {}
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it('POST /onboarding/register/user/confirm_registration with invalid value, HttpStatus 400', () => {
    cy.request({
      method: 'POST',
      url: hostUrlOS + '/onboarding/register/user/confirm_registration',
      qs: {
        sessionInfo:  -1
      },
      failOnStatusCode: false
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  it.skip('TODO: GET /onboarding/register/user/did_register, HttpStatus 200', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/user/did_register'
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it.skip('TODO: GET /onboarding/register/user/no_did, HttpStatus 204', () => {
    cy.request({
      method: 'GET',
      url: hostUrlOS + '/onboarding/register/user/no_did'
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })
})
