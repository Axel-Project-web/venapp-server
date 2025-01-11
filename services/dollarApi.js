function getDollar() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://ve.dolarapi.com/v1/dolares");
      const json = await response.json();
      const paralelo = json.find((dollar) => dollar.nombre == "Paralelo");
      resolve(paralelo.promedio);
    } catch (error) {
      reject({
        message: "Error at file <dollarApi.js>",
        error,
      });
    }
  });
}

module.exports = { getDollar };
