const express = require("express");
const { configExpress } = require("./config/express");
const { configHBS } = require("./config/hbs");
const { router } = require("./config/routes");

const PORT = 3000;

const app = express();

configExpress(app);
configHBS(app);
app.use(router);

app.listen(PORT);
