require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080,
  HOST: process.env.HOST || "localhost",
};

const endpoints = {
  DOLLAR_API: process.env.DOLLAR_API,
  BCV_PAGE_URL: process.env.BCV_PAGE_URL,
};

const routes = {
  GET_ALL_ROUTE: process.env.GET_ALL_CURRENCIES_API,
};

module.exports = { config, endpoints, routes };
