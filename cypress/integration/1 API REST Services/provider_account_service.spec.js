/// <reference types="Cypress" />

import { providerAccountSchema } from "../../schemas/provider_account";
import { providerAccountHistorySchema } from "../../schemas/provider_account_history";
import { providerAccountCredentialUserSchema } from "../../schemas/provider_account_credential_user";

// Testsuite to test implementation of the user account service
// GAIAXPORTAL-36, GAIAXPORTAL-43, GAIAXPORTAL-45

describe('Send serveral requests to provider account service', () => {

  const hostUrlPAS = Cypress.env("HOST_USER_ACC_SERVICE")

  beforeEach(() => {
    cy.fixture('/requestBodies/providerAccountData.json').as('providerAccountBody')

    cy.fixture('/requestBodies/providerAccountCredentialsUser.json').as('providerAccountCredentialsUserBody')
  })

  // GAIAXPORTAL-36
  it('PUT /account/provider/{providerId}, HttpStatus 200', function() {

    var requestBody = this.providerAccountBody
    var providerId = 12345

    cy.request({
      method: 'PUT', //update or create provider
      url: hostUrlPAS + `/account/provider/${providerId}`,
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  // GAIAXPORTAL-36
  it('GET /account/provider/{providerId}, HttpStatus 200 and check schema', function() {

    var providerId = 12345

    cy.request({
      method: 'GET',
      url: hostUrlPAS + `/account/provider/${providerId}`,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        cy.validateSchema(providerAccountSchema, response.body[0])
      })
  })

    // GAIAXPORTAL-36
    it('GET /account/provider, HttpStatus 400, missing providerId', function() {
  
      cy.request({
        method: 'GET',
        url: hostUrlPAS + `/account/provider`,
      }).as('response')
      cy.get('@response')
        .its('status')
        .should('equal', 400)
    })

  // GAIAXPORTAL-36
  it('POST /account/provider/{providerId}, HttpStatus 200', function() {

    var requestBody = this.providerAccountBody
    var providerId = 12345

    cy.request({
      method: 'POST', // create provider
      url: hostUrlPAS + `/account/provider/${providerId}`,
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  // GAIAXPORTAL-43
  it('GET /account/provider/{providerId}/history, HttpStatus 200 and check schema', function() {

    var providerId = 12345

    cy.request({
      method: 'GET',
      url: hostUrlPAS + `/account/provider/${providerId}/history`,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        cy.validateSchema(providerAccountHistorySchema, response.body[0])
      })
  })

  // GAIAXPORTAL-43
  it('GET /account/provider/history, HttpStatus 400, missing providerId', function() {

    cy.request({
      method: 'GET',
      url: hostUrlPAS + `/account/provider/history`,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 400)
  })

  // GAIAXPORTAL-45
  it('GET /user-account/ppr/{providerId}/users, HttpStatus 200 and check schema', function() {

    var providerId = 12345

    cy.request({
      method: 'GET',
      url: hostUrlPAS + `/user-account/ppr/${providerId}/users`})
      .then((response) => {
        cy.validateSchema(providerAccountCredentialUserSchema, response.body[0])
        expect(response.status).to.be.eq(200)
      })
  })

  // GAIAXPORTAL-45
  it('POST /user-account/ppr/{providerId}/users, HttpStatus 200 and check schema', function() {

    var providerId = 12345
    var requestBody = this.providerAccountCredentialsUserBody

    cy.request({
        method: 'POST',
        url: hostUrlPAS + `/user-account/ppr/${providerId}/users`,
        body: requestBody})
      .then((response) => {
        cy.validateSchema(providerAccountCredentialUserSchema, response.body)
        expect(response.status).to.be.eq(200)
      })
  })

  // GAIAXPORTAL-45
  it('PUT /user-account/ppr/{providerId}/users, HttpStatus 200 and check schema', function() {

    var providerId = 12345
    var userId = 67890
    var requestBody = this.providerAccountCredentialsUserBody
    requestBody.id = userId

    cy.request({
        method: 'PUT',
        url: hostUrlPAS + `/user-account/ppr/${providerId}/users/${userId}`,
        body: requestBody})
      .then((response) => {
        cy.validateSchema(providerAccountCredentialUserSchema, response.body)
        expect(response.status).to.be.eq(200)
      })
  })

    // GAIAXPORTAL-45
    it('DELETE /user-account/ppr/{providerId}/users, HttpStatus 200 and check schema', function() {

      var providerId = 12345
      var userId = 67890

      cy.request({
          method: 'DELETE',
          url: hostUrlPAS + `/user-account/ppr/${providerId}/users/${userId}`})
        .then((response) => {
          expect(response.status).to.be.eq(200)
        })
    })
})
