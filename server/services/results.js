const db = require("../services/db");

function getAll() {
  const votedNoQuery = `SELECT COUNT(*) FROM votes WHERE vote=0 AND question_id=q.id`;
  const votedYesQuery = `SELECT COUNT(*) FROM votes WHERE vote=1 AND question_id=q.id`;
  const query = `SELECT q.id, q.question, COUNT(v.id) AS total_vote, (${votedNoQuery}) AS voted_no, (${votedYesQuery}) AS voted_yes`;
  const queryFrom = `FROM questions AS q`;
  const queryJoin = `LEFT JOIN votes AS v`;
  const queryOn = `ON q.id = v.question_id`;
  const queryGroup = `GROUP BY q.id`;
  const queryOrder = `ORDER BY q.created_at DESC;`;
  return db.fetchAll(
    `${query} ${queryFrom} ${queryJoin} ${queryOn} ${queryGroup} ${queryOrder}`,
  );
}

module.exports = {
  getAll,
};
