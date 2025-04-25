/// <reference types="Cypress" />

import { userAccountSchema } from "../../schemas/user_account";

// Testsuite to test implementation of the user account service
// GAIAXPORTAL-37

describe('Send serveral requests to user account service', () => {

  const hostUrlUAS = Cypress.env("HOST_USER_ACC_SERVICE")

  beforeEach(() => {
    cy.fixture('/requestBodies/userAccountData.json').as('userAccountBody')
  })

  it('GET /account/user/{accountId}, HttpStatus 200 and check schema', function() {

    let accountId = 1234

    cy.request({
      method: 'GET',
      url: hostUrlUAS + `/account/user/${accountId}`,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        cy.validateSchema(userAccountSchema, response.body[0])
      })
  })

  it('POST /account/user/{accountId}, HttpStatus 200', function() {

    let accountId = 5678
    var requestBody = this.userAccountBody

    cy.request({
      method: 'POST',
      url: hostUrlUAS + `/account/user/${accountId}`,
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it('PUT /account/user, HttpStatus 200', function() {

    var requestBody = this.userAccountBody

    cy.request({
      method: 'PUT',
      url: hostUrlUAS + '/account/user',
      body: requestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })
})
