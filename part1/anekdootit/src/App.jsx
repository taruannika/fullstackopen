import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(() => {
    const obj = {};
    for (let i = 0; i < anecdotes.length; i++) {
      obj[i] = 0;
    }
    return obj;
  });

  const hasVotes = Object.values(votes).some((value) => value > 0);

  const mostVotes = Object.keys(votes).reduce((a, b) =>
    votes[a] > votes[b] ? a : b
  );

  const handleNextAnecdote = () => {
    const next = Math.floor(Math.random() * anecdotes.length);
    setSelected(next);
  };

  const handleVotes = () => {
    setVotes((prev) => ({ ...prev, [selected]: prev[selected] + 1 }));
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      {hasVotes && (
        <div>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[mostVotes]}</p>
        </div>
      )}
    </div>
  );
};

export default App;
