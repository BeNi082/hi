const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
          url:'https://sneakerindustry.ro/',
            email:'manoleabeni@gmail.com',
            password:'beniamin01032005',
        }
    },
});
