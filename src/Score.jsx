import { useEffect, useState } from "react";

const Score = () => {
  const [score, setScore] = useState(localStorage.getItem("currentScore") || 0);

  useEffect(() => {
    localStorage.setItem("currentScore", score);
  }, [score]);
  return (
    <div>
      <h2>Your Current Score Is {score}</h2>
      <button onClick={() => setScore((prevaScore) => prevaScore + 1)}>
        Add 1 to score
      </button>
      <button onClick={() => setScore((prevbScore) => prevbScore - 1)}>
        Subtract 1 from score
      </button>
    </div>
  );
};

export default Score;
