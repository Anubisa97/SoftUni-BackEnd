const { Router } = require("express");

const { isGuest, isUser } = require("../middlewares/guards");

const { movieRouter } = require("../controllers/movie");
const { home, details, search } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");
const { attachGet, attachPost } = require("../controllers/attach");
const { userRouter } = require("../controllers/user");

function configRoutes(app) {
  app.get("/", home);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.get("/search", search);

  app.get("/attach/:id", isUser(), attachGet);
  app.post("/attach/:id", isUser(), attachPost);

  app.get("/create/cast", isUser(), createCastGet);
  app.post("/create/cast", isUser(), createCastPost);

  app.use(movieRouter);

  app.use(userRouter);

  app.get("*", notFound);
}

module.exports = { configRoutes };
