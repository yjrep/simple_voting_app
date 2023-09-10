const db = require("../services/db");

function vote(questionVoteObj) {
  // duplicate check will not be done (either needs to be checked here or add constraints to the db).
  // It is assumed that the user has not voted for the question.
  validateVote(questionVoteObj);
  const { question_id, username, voteVal } = questionVoteObj;
  const vote = +!!voteVal; // convert to 0 or 1
  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  const query = `INSERT INTO votes (question_id, username, vote, created_at) VALUES (@question_id, @username, @vote, @created_at)`;
  const result = db.run(query, { question_id, username, vote, created_at });

  let message = "Error in casting vote";
  if (result.changes) {
    message = "Successfully saved";
  }

  return { message };
}

function validateVote(questionVoteObj) {
  let messages = [];

  if (!questionVoteObj) {
    messages.push("No object is provided");
  }

  if (!questionVoteObj.question_id) {
    messages.push("Question ID is empty");
  }

  if (!questionVoteObj.username) {
    messages.push("Username is empty");
  }

  if (!questionVoteObj.vote) {
    messages.push("User vote is empty");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

module.exports = {
  vote,
};
