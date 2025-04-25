/// <reference types="Cypress" />

import { articleSchema } from "../../schemas/article";

// Testsuite to test implementation of the article backend service
// GAIAXPORTAL-19

describe('Send serveral requests to article backend service', () => {

  const hostUrlAS = Cypress.env("HOST_ARTICLE_SERVICE")
  const articleRequestBody = require('../../fixtures/requestBodies/article')

  it('GET /articles, HttpStatus 200', () => {
    cy.request('GET', hostUrlAS + '/articles').as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
  })

  it('GET /articles, response is in json format', () => {
    cy.request('GET', hostUrlAS + '/articles').as('response')
    cy.get('@response')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('GET /articles, check schema', () => {
    cy.request('GET', hostUrlAS + '/articles')
      .then((response) => {
        cy.validateSchema(articleSchema, response.body[0])
      })
  })

  it('GET /articles, response is an array', () => {
    cy.request('GET', hostUrlAS + '/articles')
      .then((response) => {
        expect(Array.isArray(response.body)).to.eq(true) 
      })
  })

  it('GET /articles/<id>, HttpStatus 200', () => {
    let articleId = 1
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/' + articleId,
    })
    .then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");
      // Check that responsed article is the requested one
      expect(response.body.id).to.eq(articleId) 
    })
  })

  it('GET /articles/<id>, check schema', () => {
    let articleId = 1
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/' + articleId,
    })
    .then((response) => {
      cy.validateSchema(articleSchema, response.body)
    })
  })

  it('GET /articles/<id>, response is not an array', () => {
    let articleId = 1
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/' + articleId,
    })
    .then((response) => {
      expect(Array.isArray(response.body)).to.eq(false) 
    })
  })

  it('POST /articles, HttpStatus 200', () => {
    cy.request({
      method: 'POST',
      url: hostUrlAS + '/articles',
      body: articleRequestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 200)
    })
  

  it('DELETE /articles, HttpStatus 204', () => {
    cy.request({
      method: 'DELETE',
      url: hostUrlAS + '/articles',
      body: articleRequestBody,
    }).as('response')
    cy.get('@response')
      .its('status')
      .should('equal', 204)
  })

  it('GET /articles/search, HttpStatus 200', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/search',
      qs: {
        key_words: "test"
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");
    })
  })

  it('GET /articles/search, check schema', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/search',
      qs: {
        key_words: "test"
      },
    })
    .then((response) => {
      if(response.body.length > 0) {
        cy.log(response.body.length + " articles found.")
        cy.validateSchema(articleSchema, response.body[0])
      }
      else {
        cy.contains("No articles found. Couldn't do schema validation").should('not.exist')
      }
    })
  })

  it('GET /articles/search, response is an array', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/search',
      qs: {
        key_words: "test"
      },
    })
    .then((response) => {
        expect(Array.isArray(response.body)).to.eq(true) 
    })
  })

  it('GET /articles/filter, HttpStatus 200', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        category: "NEWS"
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");
    })
  })

  it('GET /articles/filter, check schema', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        category: "ARTICLE"
      },
    })
    .then((response) => {
      if(response.body.length > 0) {
        cy.log(response.body.length + " articles found.")
        cy.validateSchema(articleSchema, response.body[0])
      }
      else {
        cy.contains("No articles found. Couldn't do schema validation").should('not.exist')
      }
    })
  })

  it('GET /articles/filter, response is an array', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        category: "ARTICLE"
      },
    })
    .then((response) => {
      expect(Array.isArray(response.body)).to.eq(true) 
    })
  })

  it('GET /articles/filter with known and unknown query parameter, HttpStatus 200', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        category: "ARTICLE",
        unknownQUERY: "NEWS"
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");
    })
  })

  it('GET /articles/filter with unknown query parameter, HttpStatus 400', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        unknownQUERY: "NEWS"
      },
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(400) 
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq("Bad Request");
    })
  })

  it('GET /articles/filter with known query parameter and invalid value, HttpStatus 204', () => {
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/filter',
      qs: {
        category: "test1234!"
      },
    })
    .then((response) => {
      expect(response.status).to.eq(204) 
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("No Content");
    })
  })
})
