const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const questionsRouter = require("./routes/questions");
const resultsRouter = require("./routes/results");
const voteRouter = require("./routes/vote");

// enabling CORS for any unknown origin
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.use("/questions", questionsRouter);
app.use("/results", resultsRouter);
app.use("/vote", voteRouter);

app.listen(port, () => {
  console.log(`Simple Voting App listening at http://localhost:${port}`);
});
