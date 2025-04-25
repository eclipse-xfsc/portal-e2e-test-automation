/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const discoveryHostUrl = Cypress.env("HOST_DISCOVERY_SERVICE")

Before(() => {
    cy.visit(`${hostUrl}/provider`)
})

Before({ tags: "@details_tab" }, function () {

    var url_to_mock_details_response = `${hostUrl}\/discovery\/ppr\/*\/details\/` // must be updated later when feature is implemented correctly
    var static_details_set = {"description":"ExpectedDescriptionInDetailsTab","certificates":["ExpectedCert1","ExpectedCert2"],"location":"Germany","location_flag":"Ger","member_since":"01/01/2022","last_updated":"05/20/2022"}
    cy.intercept(url_to_mock_details_response, static_details_set)
})

Before({ tags: "@data_tab" }, function () {

    var url_to_mock_data_response = `${hostUrl}\/discovery\/ppr\/*\/data\/` // must be updated later when feature is implemented correctly
    var static_data_set =  [{"id":"123","name":"ExpectedDataName","description":"ExpectedDescriptionForDataName","source":"source","location":"location","tags":["tag1","tag2","tag3"],"category":"category","img_logo_url":"https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,"img_preview_url":"https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","ppr_name":"ExpectedProviderName","ppr_url":"http://localhost","cloud_service":"http://localhost","location_flag":"http://localhost","frequency_of_update":"frequency update","last_updated":"2022-05-31"},
                            {"id":"456","name":"ExpectedDataName2","description":"ExpectedDescriptionForDataName2","source":"source","location":"location","tags":["tag1","tag2","tag3"],"category":"category","img_preview_url":"https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","ppr_name":"ExpectedProviderName2","ppr_url":"http://localhost","cloud_service":"http://localhost","location_flag":"http://localhost","frequency_of_update":"frequency update","last_updated":"2022-05-29","onDetailsClick":"fooBAR"}]
    cy.intercept(url_to_mock_data_response, static_data_set)
})

Before({ tags: "@services_tab" }, function () {

    var url_to_mock_service_response = `${hostUrl}\/discovery\/ppr\/*\/services\/` // must be updated later when feature is implemented correctly
    var static_service_set = [{"id":"123","name":"ExpectedServiceName","logo":"https://cdn.logo.com/hotlink-ok/logo-social.png","description":"ExpectedDescriptionForServiceName","features":"features","stack":"stack","security":"security","location":"location","category":"category","tags":["tag1","tag2","tag3"],"img_preview_url":"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg","ppr_name":"ExpectedProviderName","ppr_url":"http://localhost","location_flag":"http://localhost","last_updated":"2022-05-31","onDetailsClick":"fooBAR","terms_of_use":"terms of user","dependent_services":[]},
                              {"id":"345","name":"ExpectedServiceName2","logo":"https://cdn.logo.com/hotlink-ok/logo-social.png","description":"ExpectedDescriptionForServiceName2","features":"features","stack":"stack","security":"security","location":"location","category":"category","tags":["tag1","tag2","tag3"],"img_preview_url":"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg","ppr_name":"ExpectedProviderName2","ppr_url":"http://localhost","location_flag":"http://localhost","last_updated":"2022-05-31","img_logo_url":"https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","terms_of_use":"terms of user","dependent_services":[]}]
    cy.intercept(url_to_mock_service_response, static_service_set)
})

When('TODO Anonymous user searched and has choosen one provider', () => {
    cy.get(':nth-child(2) > .sc-bBXxYQ > .sc-papXJ > .sc-BeQoi > .sc-kgUAyh')
      .click()
})

Then('Anonymous user sees {string} tab', (expectedTab) => {
    cy.contains(expectedTab)
})

Then('Anonymous user sees provider logo, short description, location', () => {
    cy.get(':nth-child(2) > .ksFlvg > .sc-papXJ > .sc-BeQoi > .sc-kgUAyh')
      .within(() => {
          cy.get('[alt="Provider Logo"]')
      })
      .should('not.contain.text', "PPR name")
      .should('contain.text', "Availability")
      .should('contain.text', "Location")
})

And('Anonymous user clicks on {string} tab', (expectedTab) => {

    cy.get('.ReactCollapse--content').within(() => {
        cy.contains(expectedTab)
        .click()
    })
})

Then('Anonymous user sees data name, provider name and description in preview', () => {
    cy.get('.sc-lkwKjF').within(() => {
        cy.contains("ExpectedDataName")
        cy.contains("ExpectedDataName2")
        cy.contains("ExpectedProviderName")
        cy.contains("ExpectedProviderName2")
        cy.contains("ExpectedDescriptionForDataName")
        cy.contains("ExpectedDescriptionForDataName2")
    })
})

Then('Anonymous user sees service name, provider name and description in preview', () => {
    cy.get('.sc-fmRtwQ').within(() => {
        cy.contains("ExpectedServiceName")
        cy.contains("ExpectedServiceName2")
        cy.contains("ExpectedProviderName")
        cy.contains("ExpectedProviderName2")
        cy.contains("ExpectedDescriptionForServiceName")
        cy.contains("ExpectedDescriptionForServiceName2")
    })
})

Then('Anonymous user sees certs, location, member since, last update and description in preview', () => {
    
    cy.get('.sc-jQHtVU').within(() => {
        cy.contains("ExpectedDescriptionInDetailsTab")
        cy.contains("ExpectedCert1")
        cy.contains("ExpectedCert2")
        cy.contains("Germany")
        cy.contains("01/01/2022")
        cy.contains("05/20/2022")
    })
})

When('Anonymous user is at Provider page', () => {
    cy.url().should('be.equal', `${hostUrl}/provider`)
})

And('Anonymous user can see all categories', function() {
    cy.request({
        method: 'GET',
        url: `${discoveryHostUrl}/discovery/ppr/filter-criterias`
      }).then((response) => {
        console.log(response.body)
        let categories = response.body.categories
        expect(response.status).to.be.eq(200)
        Object.values(categories).forEach(category => {
            cy.contains(category.name)
        })
      })
})