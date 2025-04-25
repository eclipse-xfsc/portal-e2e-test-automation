# Portal e2e Test Automation

## Run cypress testsuites

#### Prerequisite:
1. JDK 1.8+
2. Maven
3. Node.js 12 or 14 and above
4. Install Cypress.io and plugins:
    > pnpm install

#### Starting cypress and running testsuites on local machine
- Start Cypress Test Runner (Cypress with Interface) and run testsuites there
    > npm run cy:open

#### Generate test execution reports
- Run all tests headless and generate reports 
    > npm run report

#### Different ways to run testsuites

- Run all tests headless with specific environment settings:
    > npx cross-env CYPRESS_HOST=http://gaia-x.portal.ext:8085 CYPRESS_HOST_ARTICLE_SERVICE=http://gaia-x.article.ext:8084 CYPRESS_HOST_ONBOARDING_SERVICE=http://gaia-x.onboarding.ext:8083 CYPRESS_HOST_EDGE_SERVICE=http://gaia-x.edge.ext:8082 CYPRESS_HOST_USER_ACC_SERVICE=http://gaia-x.user-account.ext:8086 cypress run

- Run one specific testsuite headless with default environment settings
    > npm run cy:run_local --spec '.\cypress\integration\1 API REST Services\article_backend_service.spec.js'

- Run testsuites for a specific browser (see: https://docs.cypress.io/guides/guides/launching-browsers#Chrome-Browsers)
    > npx cypress run --browser chrome
