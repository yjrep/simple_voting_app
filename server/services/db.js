const Sqlite = require("better-sqlite3");
const path = require("path");
const db = new Sqlite(path.resolve("questions.db"), { fileMustExist: true });

function fetchAll(sql) {
  return db.prepare(sql).all();
}
function query(sql, params) {
  return db.prepare(sql).all(params);
}

function run(sql, params) {
  return db.prepare(sql).run(params);
}

module.exports = {
  fetchAll,
  query,
  run,
};
