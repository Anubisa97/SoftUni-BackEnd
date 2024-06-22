const express = require("express");
const { configExpress } = require("./config/express");
const { configHBS } = require("./config/hbs");
const { configDatabase } = require("./config/database");
const { configRoutes } = require("./config/routes");

const PORT = 3000;

async function start() {
  const app = express();

  await configDatabase();
  configExpress(app);
  configHBS(app);
  configRoutes(app)

  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

start();
