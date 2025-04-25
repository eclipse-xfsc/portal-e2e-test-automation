/// <reference types="Cypress" />

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const hostUrl = Cypress.env("HOST")
const discoveryHostUrl = Cypress.env("HOST_DISCOVERY_SERVICE")

Before(() => {  
    cy.visit(`${hostUrl}/services`)
});

Before({ tags: "@details_tab" }, function () {
    
    var url_to_mock_details_response = `${hostUrl}\/discovery\/services\/*\/details\/` 
    var static_details_data = {"id":"undefined","name":"Service name","img_preview_url":"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg","logo":"https://cdn.logo.com/hotlink-ok/logo-social.png","ppr_name":"ppr name","ppr_url":"http://localhost","description":"ExpectedDetailsDescription","features":"features","stack":"ExpectedDetailsStack","security":"security","location":"ExpectedDetailsLocation","location_flag":"http://localhost","last_updated":"2022-06-01","category":"ExpectedDetailsCategory","tags":["ExpectedTag1","ExpectedTag2","ExpectedTag3"],"terms_of_use":"ExpectedTermOfUse","dependent_services":[]}
    cy.intercept(url_to_mock_details_response, static_details_data)
})

Before({ tags: "@price_tab" }, function () {
    
    var url_to_mock_price_response = `${hostUrl}\/discovery\/services\/*\/price\/` 
    var static_price_data = [{"id":"1","name":"name_1","price":"12.5"},{"id":"2","name":"name_2","price":"13.5"},{"id":"3","name":"name_3","price":"14.5"},{"id":"4","name":"name_4","price":"15.5"}]
    cy.intercept(url_to_mock_price_response, static_price_data)
})

Before({ tags: "@contact_tab" }, function () {
    
    var url_to_mock_contact_response = `${hostUrl}\/discovery\/services\/*\/contacts\/` 
    var static_contact_data = [{"type":"tech_phone","value":"+49 00 0000 11111"},{"type":"tech_email","value":"undefined@example.com"},{"type":"supp_phone","value":"+49 00 0000 22222"},{"type":"supp_email","value":"undefined@example.com"}]
    cy.intercept(url_to_mock_contact_response, static_contact_data)
})

Before({ tags: "@screenshots_tab" }, function () {
    
    var url_to_mock_screenshot_response = `${hostUrl}\/discovery\/services\/*\/screenshots\/` 
    var screenshotUrl1 = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Swiss_National_Park_131.JPG"
    var screenshotUrl2 = "https://upload.wikimedia.org/wikipedia/commons/6/65/Adirondacks_in_May_2008.jpg"
    var screenshotUrl3 = "https://upload.wikimedia.org/wikipedia/commons/0/09/Zall_Dajti.jpg"
    var static_screenshot_data = [{"serviceId":"undefined","preview_imgs":[{"url":screenshotUrl1},{"url":screenshotUrl2},{"url":screenshotUrl3}]}]

    cy.intercept(url_to_mock_screenshot_response, static_screenshot_data)
})

When('Anonymous user searched and has choosen one service', () => {
    cy.get(':nth-child(2) > .sc-bBXxYQ > .dmreuu > .sc-BeQoi > .sc-kgUAyh')
      .click()
})

Then('Anonymous user sees {string} tab', (expectedTab) => {
    cy.contains(expectedTab)
})

And('Anonymous user sees provider logo, name, location', () => {
    cy.get('[alt="Provider Logo"]')
    cy.contains("Service name")
    cy.contains("Location")
})

And('Anonymous user sees stack, security', () => {
    cy.contains("Stack")
    cy.contains("Security")
})

Then('Anonymous user sees opened Details tab', () => {
    cy.get('.sc-jfmDQi > :nth-child(1) > .sc-bBXxYQ > .sc-papXJ')
      .should('have.text', `Details`)
})

And('Anonymous user sees Describtion and Tags in Details tab', () => {
    cy.get('.ReactCollapse--content')
      .within(() => {
        cy.contains("Description")
        cy.contains("TAGS")
    })
})

And('Anonymous user sees Stack, Date, TOU, Location, Category in Details tab', () => {
    cy.get('.ReactCollapse--content')
      .within(() => {
        cy.contains("STACK")
        cy.contains("DATE")
        cy.contains("TERMS OF USE")
        cy.contains("LOCATION")
        cy.contains("CATEGORY")
    })
})

const priceTabClass = '.sc-jfmDQi > :nth-child(2) > .sc-bBXxYQ > .sc-papXJ' 
And('Anonymous user opens Price tab', () => {
    cy.get(priceTabClass)
      .should('have.text', `Price`)
      .click()
})

Then('Anonymous user sees Book button', () => {
    cy.get(priceTabClass)
    cy.get(`button:contains("Book")`)
})

const contactTabClass = '.sc-jfmDQi > :nth-child(4) > .sc-bBXxYQ > .sc-papXJ'
And('Anonymous user opens Contact tab', () => {
    cy.get(contactTabClass)
      .should('have.text', `Contact`)
      .click()
})

Then('Anonymous user sees technical phone number', () => {
    cy.get(contactTabClass)
    cy.contains("Technical phone number")
})

And('Anonymous user sees technical email address', () => {
    cy.get(contactTabClass)
    cy.contains("Technical email address")
})

const screenTabClass = '.dRQnef > .sc-bBXxYQ > .sc-papXJ'
And('Anonymous user opens Screenshots tab', () => {
    cy.get(screenTabClass)
      .should('have.text', `Screenshots`)
      .click()
})

Then('Anonymous user sees three screenshots', () => {

    cy.get('.dRQnef > .eiLIoM > .ReactCollapse--collapse > .ReactCollapse--content > .ihSYoz')

    cy.screenshot()

    cy.get('.image-gallery-right-nav > .image-gallery-svg')
      .click()
    cy.screenshot()

    cy.get('.image-gallery-right-nav > .image-gallery-svg')
    .click()
    cy.screenshot()
})

Then('Anonymous user sees preview images', () => {

    cy.get('.image-gallery-thumbnails-container')
      .should('not.have.length', 0)

})

When('Anonymous user is at Services page', () => {
    cy.url().should('be.equal', `${hostUrl}/services`)
})

And('Anonymous user can see all categories', function() {
    cy.request({
        method: 'GET',
        url: `${discoveryHostUrl}/discovery/services/filter-criterias`
      }).then((response) => {
        console.log(response.body)
        let categories = response.body.categories
        expect(response.status).to.be.eq(200)
        Object.values(categories).forEach(category => {
            cy.contains(category.name)
        })
      })
})
