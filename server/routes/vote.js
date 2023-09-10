const express = require("express");
const vote = require("../services/vote");
const router = express.Router();

/* POST cast vote on question */
router.post("/", function (req, res, next) {
  try {
    // no pagination done for now
    res.json(vote.vote(req.body));
  } catch (err) {
    console.error(`Error while getting questions `, err.message);
    next(err);
  }
});

module.exports = router;
