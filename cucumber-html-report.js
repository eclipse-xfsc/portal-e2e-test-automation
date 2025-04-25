
// https://github.com/wswebcreation/multiple-cucumber-html-reporter/blob/main/README.MD

const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/results/cucumber-json",
    reportPath: "cypress/reports/cucumber-Report",
    metadata: {
        browser: {
            name: "chrome",
            version: "101",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "20.04.4 LTS",
        },
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'GAIAXPORTAL Project'},
            {label: 'Release', value: '1.0.0'}
        ]
    }
});