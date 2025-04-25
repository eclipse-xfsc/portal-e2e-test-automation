/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const discoveryHostUrl = Cypress.env("HOST_DISCOVERY_SERVICE")

const categoryClassName = '.sc-eGAhfa'

Before(() => {
    cy.visit(`${hostUrl}`)
})

When('Anonymous goes at {string} page', (expectedPage) => {
    cy.contains(`${expectedPage}`)
      .click()
})

Then('Anonymous user sees all categories at {string} page', (expectedPage) => {

    let filterCriteriasUrl = createFilterCriteriasUrl(expectedPage)

    cy.request({
        method: 'GET',
        url: filterCriteriasUrl
    }).then((response) => {     
        
        let categories = response.body.categories

        Object.values(categories).forEach(category => {
            cy.get(categoryClassName)
              .within(() => {
                cy.contains(category.name)
              })
        })
    })
})

Then('Anonymous user clicks on expandable categories header at {string} page', (expectedPage) => {

    let filterCriteriasUrl = createFilterCriteriasUrl(expectedPage)

    cy.request({
        method: 'GET',
        url: filterCriteriasUrl
    }).then((response) => {     
        
        let categories = response.body.categories

        Object.values(categories).forEach(category => {
            cy.get(categoryClassName)
              .within(() => {
                cy.contains(category.name).click()
              })
        })
    })

    cy.screenshot()
})

function createFilterCriteriasUrl(page) {

    let discoverySubPage

    switch (page) {
        case 'Provider': 
            discoverySubPage = 'ppr'
            break;
        case 'Services': 
            discoverySubPage = 'services'
            break;
        case 'Data': 
            discoverySubPage = 'data'
            break;
        default: 
            assert.isTrue(false, "No valid page was given!")
    }  

    let filterCriteriasUrl = `${discoveryHostUrl}/discovery/${discoverySubPage}/filter-criterias`

    return filterCriteriasUrl
  }
  