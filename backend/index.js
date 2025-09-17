const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const challenges = [
  "Plant a tree in your neighborhood and post a photo.",
  "Conduct a home waste audit and record your findings.",
  "Interview a local environmental activist."
];

let leaderboard = [];

app.get("/challenge", (req, res) => {
  const challenge = challenges[Math.floor(Math.random() * challenges.length)];
  res.json({ challenge });
});

app.post("/leaderboard", (req, res) => {
  const { user, solution } = req.body;
  if (!user || !solution) return res.status(400).send();
  const points = Math.floor(Math.random() * 20) + 10;
  leaderboard.push({ user, points, date: new Date() });
  res.json({ status: "ok", points });
});

app.get("/leaderboard", (req, res) => {
  res.json(leaderboard.sort((a, b) => b.points - a.points));
});

// AI Suggestion endpoint mock
app.get("/ai-suggest", (req, res) => {
  res.json({ suggestion: "Based on your track record, try a water conservation challenge next!" });
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
