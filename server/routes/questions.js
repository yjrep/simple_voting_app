const express = require("express");
const router = express.Router();
const questions = require("../services/questions");

/* GET all questions listing. */
router.get("/", function (req, res, next) {
  try {
    res.json(questions.getAll());
  } catch (err) {
    console.error(`Error while getting all questions `, err.message);
    next(err);
  }
});

/* POST questions not voted by user. */
router.post("/", function (req, res, next) {
  try {
    const { username } = req.body;
    res.json(questions.getNotVoted(username));
  } catch (err) {
    console.error(`Error while getting not voted questions `, err.message);
    next(err);
  }
});

/* POST question */
router.post("/add", function (req, res, next) {
  try {
    res.json(questions.create(req.body));
  } catch (err) {
    console.error(`Error while adding questions `, err.message);
    next(err);
  }
});

module.exports = router;
