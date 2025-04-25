/// <reference types="Cypress" />

// Testsuite to test implementation of GAIAXPORTAL-16, GAIAXPORTAL-20, GAIAXPORTAL-218
// based on GAIAXPORTAL-51 the Home Button was replaced through an Logo Image 

describe('Anonymous user would like to be informed about news and Gaia-X itself', () => {

  const hostUrl = Cypress.env("HOST")

  beforeEach(() => {
    cy.visit(hostUrl)
  })

  // GAIAXPORTAL-16
  it('Check for section called "What´s new"', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()

    // Check that text 'What´s new' exists and is visible
    cy.get('.content')
      .within(() => {
        cy.get(".article-header-message").then((ahm) => { 
          expect(ahm.text().includes("What´s new"));
        })
      })
  })

  // GAIAXPORTAL-218
  it('Check that articles in "What´s new" section exists', () => {
    cy.get(':nth-child(3) > .articles-layout > .articles-panel-layout')
      .should('have.length.at.least', 1)
  })

  // GAIAXPORTAL-16
  it('Check for section called "What is GAIA-X?"', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()

    // Check that text 'What is GAIA-X?' exists and is visible
    cy.get('.content')
      .within(() => {
        cy.get(".article-header-message").then((ahm) => { 
          expect(ahm.text().includes("What is GAIA-X?"));
        })
      })
  })

  // GAIAXPORTAL-16
  it('Check that newsCard component has a logo', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()
    // For each acticle item
    cy.get('.content')
      .within(() => {
        cy.get('.article-item-inside')
          // For each teaser
          .each(() => {
            cy.get('.article-preview-image')
              .within(() => {
                // Check that a logo exists
                cy.get('img').and((image) => {
                  // "naturalWidth" and "naturalHeight" are set when the image loads
                  expect(image.naturalWidth).to.be.greaterThan(0)
                  expect(image.naturalHeight).to.be.greaterThan(0)
                })
              })
          })
      })
  })

  // GAIAXPORTAL-16
  it('Check that newsCard component has a title', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()
    // For each acticle item
    cy.get('.content')
      .within(() => {
        cy.get('.article-item-inside')
          // For each teaser
          .each(() => {
            // Check that a title exists
            cy.get('.article-headline')
              .and((headline) => {
                expect(headline.text()).is.not.empty
              })
          })
      })
  })

  // GAIAXPORTAL-16
  it('TODO: Check that newsCard component has a URL', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()
    // For each acticle item
    cy.get('.content')
      .within(() => {
        cy.get('.article-item-inside')
          // For each teaser
          .each(() => {
            // Check that a URL exists
            cy.get('.article-headline')
              .and((headline) => {
                // TODO: right now newsCard component isnt implemented completely
                expect(true).is.not.true
                expect(headline.text()).is.not.empty
              })
          })
      })
  })

  // GAIAXPORTAL-16
  it('Check that newsCard component has a teaser text', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()
    // For each acticle item
    cy.get('.content')
      .within(() => {
        cy.get('.article-item-inside')
          // For each teaser
          .each(() => {
            // Check that a teaser text exists
            cy.get('.article-text')
              .and((teaserText) => {
                expect(teaserText.text()).is.not.empty
              })
          })
      })
  })

  // GAIAXPORTAL-16
  it('Check that newsCard component has a button', () => {
    // Click 'Home' on leftside main menu
    cy.get('[alt="Gaia-x logo image"]')
      .click()
    // For each acticle item
    cy.get('.content')
      .within(() => {
        cy.get('.article-item-inside')
          .each(() => {
            // Check for each teaser
            cy.contains('button.article-detail-button', "Details")
          }) 
      })
  })

  // GAIAXPORTAL-20
  it('TODO: Check news/articles are equal to these from backend', () => {

    const hostUrlAS = Cypress.env("HOST_ARTICLE_SERVICE")
    
    let articleId = 1
    let articleResponse
    
    cy.request({
      method: 'GET',
      url: hostUrlAS + '/articles/' + articleId,
    })
    .then((response) => {
      articleResponse = response
      expect(true).is.not.true
    })
    // and so on...
    // TODO: right now article service delivers not same articles like shown on page
  })
})
