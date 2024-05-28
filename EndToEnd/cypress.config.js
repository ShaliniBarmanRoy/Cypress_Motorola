const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: "http://localhost:4200",
    defaultCommandTimeout: 10000,
    "chromeWebSecurity":false,
    "reporter":"mochawesome",
    "reporterOptions":
    {
      "reportDir":"cypress/reports",
      "reportFilename": "report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
