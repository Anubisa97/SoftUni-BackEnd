const mongoose = require("mongoose");

require("../models/movie");
require("../models/cast");

const connectionString = "mongodb://localhost:27017/movie-magic";

async function configDatabase() {
  await mongoose.connect(connectionString);
  console.log("Database Connected");
}

module.exports = { configDatabase };
