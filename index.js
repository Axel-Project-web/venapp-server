import cors from "cors";
import https from "https";
import express from "express";

// creating app
const app = express();

// importing router
import { router } from "./router/router.js";

// setting middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

// configuration
import { config, routes } from "./config.js";

https.createServer(app).listen(config.PORT, () => {
  console.log(`
    [+] Server running...
    [+] Port: ${config.PORT}
    [+] Host: ${config.HOST}
    [+] To get all currencies: ${config.HOST}:${config.PORT}${routes.GET_ALL_ROUTE}
  `);
});
