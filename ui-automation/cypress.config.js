const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://ai-task-assistant-cl-v3-en.onrender.com",

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});
