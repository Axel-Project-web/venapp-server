const axios = require("axios");
const https = require("https");
const { load } = require("cheerio");

// setting httpsAgent
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

// routes
const { endpoints } = require("../config.js");

const regexp = /^[\d\,]*$/;

function scrapingBcv() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(endpoints.BCV_PAGE_URL, {
        httpsAgent,
      });
      const bcv_page = load(data);
      const information = {};
      bcv_page("div.recuadrotsmc")
        .text()
        .trim()
        .split(/\s+/)
        .reduce((accumulator, currentValue) => {
          if (regexp.test(currentValue)) {
            information[accumulator] = currentValue;
          } else {
            return currentValue;
          }
        });
      information["date"] = bcv_page(
        "div.pull-right > span.date-display-single"
      ).text();

      resolve(information);
    } catch (error) {
      reject({
        message: "Error at file <scraping.js>",
        error,
      });
    }
  });
}

module.exports = { scrapingBcv };
