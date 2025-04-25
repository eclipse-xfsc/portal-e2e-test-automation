/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const discoveryHostUrl = Cypress.env("HOST_DISCOVERY_SERVICE")

Before(() => {
    cy.visit(`${hostUrl}/data`)
})

Before({ tags: "@details_tab" }, function () {

    var url_to_mock_details_response = `${hostUrl}\/discovery\/data\/*\/details\/` // must be updated later when feature is implemented correctly
    var static_details_set = {"description":"ExpectedDetailsDescription","source":"ExpectedDetailsSource","cloud_service":"http://expectedCloudService","frequency_of_update":"2022-01-01","certificates":["ExpectedCert1","ExpectedCert2"],"tags":["ExpTag1","ExpTag2","ExpTag3"],"location":"ExpectedDetailsLocation","location_flag":"Ger","member_since":"01/01/2022","last_updated":"05/20/2022","category":"ExpectedDetailsCategory"}
    cy.intercept(url_to_mock_details_response, static_details_set)
})

When('Anonymous user searched and has choosen one data name', () => {
    cy.get(':nth-child(2) > .sc-bBXxYQ > .dmreuu > .sc-BeQoi > .sc-kgUAyh')
      .click()
})

Then('Anonymous user sees {string} tab', (expectedTab) => {
    cy.contains(expectedTab)
})

Then('Anonymous user sees provider logo, short description, location', () => {
    cy.get(':nth-child(2) > .ksFlvg > .dmreuu > .sc-BeQoi > .sc-kgUAyh')
      .within(() => {
          cy.get('[alt="Provider Logo"]')
      })
      .should('not.contain.text', "data name")
      .should('not.contain.text', "PPR name")
    cy.contains("Short Description")
    cy.contains("Location")
})

Then('Anonymous user sees Details tab', () => {
    cy.get('.sc-jfmDQi > :nth-child(1) > .sc-bBXxYQ')
      .should('have.text', `Details`)
})

And('Anonymous user sees Description, Tags, Source, Cloud Service in Details tab', () => {
    cy.get('.joXTuW').within(() => {
        cy.contains("ExpectedDetailsDescription")
        cy.contains("ExpTag1")
        cy.contains("ExpTag2")
        cy.contains("ExpTag3")
        cy.contains("ExpectedDetailsSource")
        cy.contains("http://expectedCloudService")
    })
})

And('Anonymous user sees Update Frequency, Last Update, Location, Category in Details tab', () => {
    cy.get('.joXTuW').within(() => {
        cy.contains("2022-01-01")
        cy.contains("ExpectedDetailsLocation")
        cy.contains("ExpectedDetailsCategory")
    })
})

Then('Anonymous user expands Sample record tab', () => {
    cy.get('.sc-jfmDQi > :nth-child(3) > .sc-bBXxYQ > .sc-papXJ')
      .click()
})

And('Anonymous sees entries with href', () => {
    cy.get(':nth-child(2) > .sc-dkdnUF')
      .should('have.attr', 'href')

    cy.get(':nth-child(3) > .sc-dkdnUF')
      .should('have.attr', 'href')

    cy.get(':nth-child(4) > .sc-dkdnUF')
      .should('have.attr', 'href')
})

When('Anonymous user is at Data page', () => {
    cy.url().should('be.equal', `${hostUrl}/data`)
})

And('Anonymous user can see all categories', function() {
    cy.request({
        method: 'GET',
        url: `${discoveryHostUrl}/discovery/data/filter-criterias`
      }).then((response) => {
        console.log(response.body)
        let categories = response.body.categories
        expect(response.status).to.be.eq(200)
        Object.values(categories).forEach(category => {
            cy.contains(category.name)
        })
      })
})
