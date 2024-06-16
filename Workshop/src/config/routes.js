const { Router } = require("express");
const { create, createPost } = require("../controllers/movie");
const { home, details, search } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");
const { attachGet, attachPost } = require("../controllers/attach");

const router = Router();

router.get("/", home);
router.get("/about", about);
router.get("/details/:id", details);
router.get("/attach/:id", attachGet);
router.post("/attach/:id", attachPost);
router.get("/create/movie", create);
router.post("/create/movie", createPost);
router.get("/create/cast", createCastGet);
router.post("/create/cast", createCastPost);
router.get("/search", search);

router.get("*", notFound);

module.exports = { router };
