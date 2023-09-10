const express = require("express");
const router = express.Router();
const results = require("../services/results");

/* GET questions results. */
router.get("/", function (req, res, next) {
  try {
    res.json(results.getAll());
  } catch (err) {
    console.error(`Error while getting results`, err.message);
    next(err);
  }
});

module.exports = router;
