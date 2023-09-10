const db = require("../services/db");

function getAll() {
  return db.fetchAll(`SELECT * FROM questions`);
}

function getNotVoted(username) {
  // throw error if username is empty
  if (!username) {
    let error = new Error("Username is empty");
    error.statusCode = 400;

    throw error;
  }

  let subQuery = `SELECT q.id FROM questions AS q JOIN votes AS v ON q.id = v.question_id WHERE v.username == @username`;
  let query = `SELECT * FROM questions WHERE id NOT IN (${subQuery}) ORDER BY created_at DESC`;
  return db.query(query, { username });
}

/* Validate question object (duplicate will not be checked) */
function validateCreate(question) {
  let messages = [];

  if (!question) {
    messages.push("No object is provided");
  }

  if (!question.question) {
    messages.push("Question is empty");
  } else if (question.question.length > 200) {
    messages.push("Question is greater than 200 characters");
  }

  if (!question.username) {
    messages.push("Username is empty");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function create(questionObj) {
  validateCreate(questionObj);
  const { question, username } = questionObj;
  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  const result = db.run(
    "INSERT INTO questions (question, username, created_at) VALUES (@question, @username, @created_at)",
    { question, username, created_at },
  );

  let message = "Error in creating question";
  if (result.changes) {
    message = "Question created successfully";
  }

  return { message };
}

module.exports = {
  getAll,
  getNotVoted,
  create,
};
