const { Router } = require("express");

const { isGuest, isUser } = require("../middlewares/guards");

const { movieRouter } = require("../controllers/movie");
const { home, details, search } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");
const { attachGet, attachPost } = require("../controllers/attach");
const { userRouter } = require("../controllers/user");

const router = Router();

function configRoutes(app) {}

router.get("/", home);
router.get("/about", about);
router.get("/details/:id", details);
router.get("/search", search);

router.get("/attach/:id", isUser(), attachGet);
router.post("/attach/:id", isUser(), attachPost);

router.get("/create/cast", isUser(), createCastGet);
router.post("/create/cast", isUser(), createCastPost);

router.use(movieRouter);

router.use(userRouter);

router.get("*", notFound);

module.exports = { router };
