import 'cypress-file-upload'
import { validateSchema } from "./validate-schema-commands"
import { Decoder } from '@nuintun/qrcode';


Cypress.Commands.add("validateSchema", validateSchema)

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add("dbQuery", (query) => {
    return  cy.task("DATABASE", {
            dbConfig: Cypress.env("DB"),
            sql: query
    })
})

// Delete created test organization in database
Cypress.Commands.add("deleteTestOrganizationInDB", () => {
    var selectedTesterEmail = `SELECT email FROM organization WHERE name LIKE 'Test%'`
    cy.task("DATABASE", {
        dbConfig: Cypress.env("DB"),
        sql: `DELETE FROM email_id_mapping WHERE email IN (${selectedTesterEmail});`
    })
    cy.task("DATABASE", {
            dbConfig: Cypress.env("DB"),
            sql: `DELETE FROM organization WHERE email IN (${selectedTesterEmail});`
    })
})

// Delete created test user in database
Cypress.Commands.add("deleteTestUserInDB", () => {
    var selectedTesterEmail = `SELECT email FROM user_reg WHERE firstname LIKE 'Test%' OR firstname LIKE 'T3st%'`
    cy.task("DATABASE", {
        dbConfig: Cypress.env("DB"),
        sql: `DELETE FROM email_id_mapping WHERE email IN (${selectedTesterEmail});`
    })
    cy.task("DATABASE", {
            dbConfig: Cypress.env("DB"),
            sql: `DELETE FROM user_reg WHERE email IN (${selectedTesterEmail});`
    })
})

// Scan QR Code
Cypress.Commands.add("scanQrCode", (imgUrl) => {
    const qrcode = new Decoder();
    qrcode.scan(qrUrl)
    .then(result => {
      console.log(result.data);
      return result.data
    })
    .catch(error => {
      console.error(error);
    })
})