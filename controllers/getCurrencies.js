// services
import { getDollar } from "../services/dollarApi.js";
import { scrapingBcv } from "../services/scraping.js";

export async function getCurrencies(request, response) {
  try {
    const parallel = await getDollar();
    const currencies = await scrapingBcv();

    response.send({
      // bcv: currencies["USD"],
      // euro: currencies["EUR"],
      // paralelo: parallel.promedio,
      // date: currencies["date"],
      bcv: "44.32",
    });
  } catch (exception) {
    console.log(`
      [+] ${exception.message}
      [+] ${exception.error}  
    `);
    response.send({});
  }
}
