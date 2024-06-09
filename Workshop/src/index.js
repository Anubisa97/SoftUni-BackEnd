const express = require("express");
const { configExpress } = require("./config/express");
const { configHBS } = require("./config/hbs");
const { router } = require("./config/routes");
const { configDatabase } = require("./config/database");

const PORT = 3000;

async function start() {
  const app = express();

  await configDatabase();
  configExpress(app);
  configHBS(app);
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

start();
