// endpoints
import { endpoints } from "../config.js";

function getDollar() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(endpoints.DOLLAR_API);
      const json = await response.json();
      const currency = json.find((dollar) => dollar.nombre == "Paralelo");
      resolve(currency);
    } catch (error) {
      reject({
        message: "Error at file <dollarApi.js>",
        error,
      });
    }
  });
}

export { getDollar };
