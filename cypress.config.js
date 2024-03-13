const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com',
    failOnStatusCode: false,
      "video": false,
      "chromeWebSecurity": false,
      "viewportWidth": 1920,
      "viewportHeight": 1080,

      setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
