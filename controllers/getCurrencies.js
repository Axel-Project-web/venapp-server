// services
const { getDollar } = require("../services/dollarApi.js");
const { scrapingBcv } = require("../services/scraping.js");

async function getCurrencies(request, response) {
  try {
    const paralelo = await getDollar();
    const currencies = await scrapingBcv();
    response.send({
      paralelo,
      bcv: currencies["USD"],
      euro: currencies["EUR"],
      date: currencies["date"],
    });
  } catch (exception) {
    console.log(`
      [+] ${exception.message}
      [+] ${exception.error}  
    `);
    response.send({});
  }
}

module.exports = { getCurrencies };
