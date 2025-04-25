/// <reference types="Cypress" />

import {Before, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const SearchTermsClass = '.sc-ftvSup > :nth-child(2)'

Before({ tags: "@search_location" }, function () {

  cy.intercept('GET', '/discovery/ppr/search?*', (req) => { // GAIAXPORTAL-175
    reqUrl.push(req.url)

    console.log(req.url)
    console.log("Added new item to array")

    req.continue()
  })
})

When('Anonymous user goes on {string} page', (page) => {
    cy.visit(`${hostUrl}/${page}`)
})

Then('Anonymous is at {string} page', (expectedPage) => {
    cy.url().should('be.equal', `${hostUrl}/${expectedPage}`)
})

Then('Anonymous user sees a Search field, Advanced Search and a plus circle button', () => {
    // search field
    cy.get('.sc-dWINGa')

    // advanced search text
    cy.get('.sc-fWIMVQ')

    // plus circle button
    cy.get('.sc-bPyhqo')
})

When('Anonymous user clicks on Advanced Search', () => {
    cy.get('.sc-fWIMVQ').click()
})

Then('Anonymous user sees search terms', () => {
    cy.get(SearchTermsClass)
      .then(()=>{
        cy.contains("Not")
        cy.contains("Storage")
        cy.contains("Provider")
        cy.contains("Service")
        cy.contains("Compute")
        })
})

When('Anonymous user clicks on each search terms', () => {

    cy.get(SearchTermsClass)
      .contains("Not")
      .click()
    cy.get(SearchTermsClass)
      .contains("Storage")
      .click()
    cy.get(SearchTermsClass)
      .contains("Provider")
      .click()
    cy.get(SearchTermsClass)
      .contains("Service")
      .click()
    cy.get(SearchTermsClass)
      .contains("Compute")
      .click()
})

// GAIAXPORTAL-175
var reqUrl = [] 
var searchResultSize
var pageSize
var pages

When('All filter terms appears in search field', () => {
    cy.get('.sc-dWINGa')
      .should('contain.value', 'NOT= STORAGE= PROVIDER= SERVICE= COMPUTE=')
})

When('Anonymous user filters for first location', () => {
  cy.get(':nth-child(1) > .eiLIoM > .ReactCollapse--collapse > .ReactCollapse--content > .sc-papXJ > :nth-child(1) > .sc-tsFYE')
    .click({force:true})

  cy.wait(3000)
})


Then('Search result set has entries for selected location only', () => {
  console.log(reqUrl)
  let urlWithLocation = reqUrl[reqUrl.length-1]
  let urlWithoutLocation =  reqUrl[reqUrl.length-2]
  assert.notEqual(urlWithoutLocation, urlWithLocation)

  cy.request({
      method: 'GET',
      url: urlWithLocation
  }).then((response) => {     
      
      let entries = response.body.data

      cy.get('.sc-kYWVYA').invoke('prop', 'innerHTML')
        .then(val => {
          console.log("innerHTML")
          console.log(val)
          searchResultSize = val


          var sizeParam = "size="
          var sizeIndex = urlWithLocation.indexOf(sizeParam)
          pageSize = urlWithLocation.substring(sizeIndex+sizeParam.length, sizeIndex+sizeParam.length+2)
          console.log(searchResultSize)
          console.log(pageSize)
          pages = searchResultSize / pageSize
          pages = Math.floor(pages) // round up

          console.log(searchResultSize)
          console.log(pages)

          expect(response.status).to.be.eq(200)
          Object.values(entries).forEach(entry => {
              assert.isTrue(urlWithLocation.includes(entry.location))
          })
        })
  })
})

And('Anonymous user clicks on next to last page', () => {

  for(let pageNumber = 1; pageNumber <= pages; pageNumber++ ){
      cy.contains('Next').click()
  }

  // if last page reached then just Prev exists
  cy.contains('Prev')
  cy.contains('Next').should('not.exist')
})

And('Anonymous user clicks on prev to first page', () => {

  for(let pageNumber = 1; pageNumber <= pages; pageNumber++ ){
      cy.contains('Prev').click()
  }

  // if first page reached then just Next exists
  cy.contains('Next')
  cy.contains('Prev').should('not.exist')
})