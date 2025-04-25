/// <reference types="Cypress" />

import { discoverySchema } from "../../schemas/discovery_contacts";
import { discoveryServicesSearchResultSchema } from "../../schemas/discovery_services_search_result";
import { discoveryDataSearchResultSchema }          from "../../schemas/discovery_data_search_result";
import { discoveryProviderSearchResultSchema } from "../../schemas/discovery_provider_search_result";
import { discoveryFilterCriteriasSchema } from "../../schemas/discovery_filter_criterias";


// Testsuite to test implementation of the discovery service
// Contacts: GAIAXPORTAL-202 
// Price: GAIAXPORTAL-188
// Data: GAIAXPORTAL-214
// Details: GAIAXPORTAL-185, GAIAXPORTAL-195, GAIAXPORTAL-209 
// Screenshots: GAIAXPORTAL-198 
// Sample records: GAIAXPORTAL-216
// Services: GAIAXPORTAL-211
// Search: GAIAXPORTAL-176, GAIAXPORTAL-177, GAIAXPORTAL-178
// Filter-criterias: GAIAXPORTAL-179 

describe('Send serveral requests to discovery service', () => {
 
  const hostUrlDS = Cypress.env("HOST_DISCOVERY_SERVICE")

  // GAIAXPORTAL-202 
  it('GET discovery/data/{id}/contacts, HttpStatus 200 and check not schema', function() {

    let id = 1234 

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/${id}/contacts`,
    }).as('response')  
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })  
  }) 

  // GAIAXPORTAL-195
  it('GET discovery/data/{id}/details, HttpStatus 200 and check not schema', function() {

    let id = 1234 

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/${id}/details`,
    }).as('response')  
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })  
  })

  // GAIAXPORTAL-188 
  it('GET /discovery/data/{id}/price, HttpStatus 200 and check not schema', function() {
    
    let id = 23234
    
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/${id}/price`,
    }).as('response')
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })
    })

    it('GET /discovery/data/{id}/sample-records, HttpStatus 200 and check not schema', function() {
  
      let id = 88263
  
      cy.request({
        method: 'GET',
        url: hostUrlDS + `/discovery/data/${id}/sample-records`,
      }).as('response')
      cy.get('@response')
        .its('status')
        .should('equal', 200)
        .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
        })
    })   

  // GAIAXPORTAL-202 
  it('GET /discovery/ppr/{id}/contacts, HttpStatus 200 and check not schema', function() {

    let id = 6543

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/${id}/contacts`,
    }).as('response')  
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })  
  })    

  // GAIAXPORTAL-214
  it('GET /discovery/ppr/{id}/data, HttpStatus 200 and check not schema', function() {

    let id = 61223

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/${id}/data`,
    }).as('response')  
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
      //cy.validateSchema(discoverySchema, response.body)
    })  
  }) 

  // GAIAXPORTAL-209
  it('GET /discovery/ppr/{id}/details, HttpStatus 200 and check not schema', function() {
  
      let id = 43112
  
      cy.request({
        method: 'GET',
        url: hostUrlDS + `/discovery/ppr/${id}/details`,
      }).as('response')
      cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })
  })

  // GAIAXPORTAL-211
  it('GET /discovery/ppr/{id}/services, HttpStatus 200 and check not schema', function() {
  
    let id = 43112
  
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/${id}/services`,
    }).as('response')
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
    })
  })

  // GAIAXPORTAL-202 
  it('GET /discovery/services/{id}/contacts, HttpStatus 200 and check not schema', function() {

    let id = 83483

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/${id}/contacts`,
    }).as('response')  
    cy.get('@response')
      .its('status')
      .should('equal', 200)
      .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
      })  
  })  

  // GAIAXPORTAL-185
  it('GET /discovery/services/{id}/details, HttpStatus 200 and check not schema', function() {

    let id = 23234
  
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/${id}/details`,
    }).as('response')  
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
      //cy.validateSchema(discoverySchema, response.body)
    })  
  })

  // GAIAXPORTAL-188 
  it('GET /discovery/services/{id}/price, HttpStatus 200 and check not schema', function() {

    let id = 23234

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/${id}/price`,
    }).as('response')  
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
    })  
  })  

  // GAIAXPORTAL-198 
  it('GET /discovery/services/{id}/screenshots, HttpStatus 200 and check not schema', function() {

    let id = 82827

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/${id}/screenshots`,
    }).as('response')
    cy.get('@response')
    .its('status')
    .should('equal', 200)
    .then((response) => {
        //cy.validateSchema(discoverySchema, response.body)
    })
  })

  // GAIAXPORTAL-176
  it(`GET /discovery/services/search, id: "1", result == 1, HttpStatus 200 and check schema`, function() {
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/search`,
      qs: {
        id: "1"
      }
    }).then((response) => {
      cy.validateSchema(discoveryServicesSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(1)
    })
  })

  // GAIAXPORTAL-176
  it(`GET /discovery/services/search, type: "service", HttpStatus 200 and check schema`, function() {
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/search`,
      qs: {
        type: "service"
      }
    }).then((response) => {
      cy.validateSchema(discoveryServicesSearchResultSchema, response.body)
      let data = response.body.data
      expect(response.status).to.be.eq(200)
      Object.values(data).forEach(dataElem => {
        expect(dataElem.type).to.be.eq("service")
      })
    })
  })

  // GAIAXPORTAL-176
  it(`GET /discovery/services/search, type: "composite-service", HttpStatus 200 and check schema`, function() {
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/search`,
      qs: {
        type: "composite-service"
      }
    }).then((response) => {
      cy.validateSchema(discoveryServicesSearchResultSchema, response.body)
      let data = response.body.data
      expect(response.status).to.be.eq(200)
      Object.values(data).forEach(dataElem => {
        expect(dataElem.type).to.be.eq("composite-service")
      })
    })
  })

  // GAIAXPORTAL-176
  it(`GET /discovery/services/search, type: "invalid", result == 0, HttpStatus 200 and check schema`, function() {
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/search`,
      qs: {
        type: "invalid"
      }
    }).then((response) => {
      console.log(response.body)
      cy.validateSchema(discoveryServicesSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(0)
    })
  })

  // GAIAXPORTAL-176
  it('GET /discovery/services/search, location: "Berlin", result >= 1, HttpStatus 200 and check schema', function() {
    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/search`,
      qs: {
        location: "Berlin"
      }
    }).then((response) => {
      cy.validateSchema(discoveryServicesSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.gte(1)
    })
  })

  // GAIAXPORTAL-177
  it('GET /discovery/data/search, type: "data", result >= 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/search`,
      qs: {
        type: "data"
      }
    }).then((response) => {
      cy.validateSchema(discoveryDataSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.gte(1)
    })
  })

  // GAIAXPORTAL-177
  it('GET /discovery/data/search, type: "invalid", result == 0, HttpStatus 200', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/search`,
      qs: {
        type: "invalid"
      }
    }).then((response) => {
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(0)
    })
  })

  // GAIAXPORTAL-177
  it('GET /discovery/data/search, name: "Otus-M", HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/search`,
      qs: {
        name: "Otus-M"
      }
    }).then((response) => {
      cy.validateSchema(discoveryDataSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
    })
  })

  // GAIAXPORTAL-177
  it('GET /discovery/data/search, id: "1", result == 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/search`,
      qs: {
        id: "1"
      }
    }).then((response) => {
      cy.validateSchema(discoveryDataSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(1)
    })
  })

  // GAIAXPORTAL-177
  it('GET /discovery/data/search, location: "Berlin", result >= 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/search`,
      qs: {
        location: "Berlin"
      }
    }).then((response) => {
      cy.validateSchema(discoveryDataSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.gte(1)
    })
  })

   // GAIAXPORTAL-178
   it('GET /discovery/ppr/search, id: "1", result == 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/search`,
      qs: {
        id: "1"
      }
    }).then((response) => {
      cy.validateSchema(discoveryProviderSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(1)
    })
  }) 

   // GAIAXPORTAL-178
   it('GET /discovery/ppr/search, type: "ppr", result >= 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/search`,
      qs: {
        type: "ppr"
      }
    }).then((response) => {
      cy.validateSchema(discoveryProviderSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.gte(1)
    })
  }) 

   // GAIAXPORTAL-178
   it('GET /discovery/ppr/search, type: "invalid", result == 0, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/search`,
      qs: {
        type: "invalid"
      }
    }).then((response) => {
      cy.validateSchema(discoveryProviderSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(0)
    })
  }) 

  // GAIAXPORTAL-178
  it('GET /discovery/ppr/search, location: "Berlin", result >= 1, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/search`,
      qs: {
        location: "Berlin"
      }
    }).then((response) => {
      cy.validateSchema(discoveryProviderSearchResultSchema, response.body)
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.gte(1)
    })
  })

  // GAIAXPORTAL-178
  it('GET /discovery/ppr/search, location: "invalid", result == 0, HttpStatus 200', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/search`,
      qs: {
        location: "invalid"
      }
    }).then((response) => {
      expect(response.status).to.be.eq(200)
      expect(response.body.data.length).to.be.eq(0)
    })
  })

  // GAIAXPORTAL-179
  it('GET /discovery/data/filter-criterias, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/data/filter-criterias`
    }).then((response) => {
      expect(response.status).to.be.eq(200)
      cy.validateSchema(discoveryFilterCriteriasSchema, response.body)
    })
  })

  // GAIAXPORTAL-179
  it('GET /discovery/ppr/filter-criterias, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/ppr/filter-criterias`
    }).then((response) => {
      expect(response.status).to.be.eq(200)
      cy.validateSchema(discoveryFilterCriteriasSchema, response.body)
    })
  })

  // GAIAXPORTAL-179
  it('GET /discovery/services/filter-criterias, HttpStatus 200 and check schema', function() {

    cy.request({
      method: 'GET',
      url: hostUrlDS + `/discovery/services/filter-criterias`
    }).then((response) => {
      expect(response.status).to.be.eq(200)
      cy.validateSchema(discoveryFilterCriteriasSchema, response.body)
    })
  })
})
