import React, { useState } from "react";

function App() {
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");

  async function getChallenge() {
    const res = await fetch("http://localhost:4000/challenge");
    const data = await res.json();
    setChallenge(data.challenge);
  }

  async function submitSolution() {
    const res = await fetch("http://localhost:4000/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "EcoHero", solution }),
    });
    const data = await res.json();
    alert(`Points awarded: ${data.points}`);
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>EcoQuest 🌍</h1>
      {!challenge && <button onClick={getChallenge}>Get Challenge</button>}
      {challenge && (
        <>
          <p>{challenge}</p>
          <textarea
            rows="3"
            value={solution}
            onChange={e => setSolution(e.target.value)}
            placeholder="Describe how you'll complete this challenge"
          />
          <br />
          <button onClick={submitSolution}>Submit Solution & Earn Points</button>
        </>
      )}
    </div>
  );
}

export default App;
