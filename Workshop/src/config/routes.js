const { Router } = require("express");
const { create, createPost } = require("../controllers/movie");
const { home, details, search } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { notFound } = require("../controllers/404");

const router = Router();

router.get("/", home);
router.get("/about", about);
router.get("/create", create);
router.post("/create", createPost);
router.get("/details/:id", details);
router.get("/search", search);

router.get("*", notFound);

module.exports = { router };
