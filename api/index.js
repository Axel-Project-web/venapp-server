const express = require("express");

// creating app
const app = express();

// importing router
const { router } = require("../router/router.js");

// setting middleware
app.use(express.json());
app.use(router);

// configuration
const { config, routes } = require("../config.js");

app.listen(config.PORT, () => {
  console.log(`
    [+] Server running...
    [+] Port: ${config.PORT}
    [+] Host: ${config.HOST}
    [+] To get all currencies: ${config.HOST}:${config.PORT}${routes.GET_ALL_ROUTE}
  `);
});

module.exports = app;
