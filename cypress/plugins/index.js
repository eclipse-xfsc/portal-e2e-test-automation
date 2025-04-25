/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');  
const exec = require('child_process').execSync; 

const cucumber = require('cypress-cucumber-preprocessor').default

const pg = require("pg");

module.exports = (on, config) => {

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions
    }
  });

  on("task", {
    DisplayHost(host) {
      console.log("The host is ", config.env.HOST);
      if (host == config.env.HOST) {
        return true;
      } else {
        return false;
      }
    },
    DATABASE ({ dbConfig, sql, values }) {
      // const pool = new pg.Pool(config.db);
      const pool = new pg.Pool(dbConfig);
      try {
          return pool.query(sql, values)
      } catch (e) {
      }
    } 
  });
  
  on('file:preprocessor', cucumber());

  on('before:run', async (details) => {  
    console.log('override before:run');  
    await beforeRunHook(details);  
    await exec("rm -r -f cypress/screenshots")
    await exec("rm -r -f cypress/videos")
    await exec("rm -r -f cypress/results")  
  });

  on('after:run', async () => {  
      console.log('override after:run');  
      await exec("npm run combine:reports");
      await afterRunHook();

      // delete not required files
      await exec("rm cypress/results/results-*");

      // move generated JUnit-Report to reports folder
      await exec("mv cypress/results/JUnit-Report.xml cypress/reports/JUnit-Report.xml");

      // generate Cucumber HTML Report for cucumber tests
      await exec("node cucumber-html-report.js");

      // generate Cucumber HTML Report for cucumber tests
      await exec("mv cypress/reports/cucumber-Report/index.html cypress/reports/cucumber-Report/Cucumber-Execution-Report.html");

      // backup reports folder for multiple runs
      await exec("mv cypress/reports/ cypress/reports-$(date '+%Y-%m-%dT%H%MZ')");
    });
};