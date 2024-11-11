/*
https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus#tehtavat-1-6-1-14
tehtävät 1.14
*/
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  //this function selects a new random anecdote
  function nextAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  //I create a new array (new Array) with the length of the array "anecdotes"
  //.fill(0) fills the new Array with the value 0: so the array looks like an array with 0 in all positions
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  //votes is the array that contains the number of votes for each anecdote
  const voting = () => {
    const vote = [...votes];
    vote[selected] += 1;
    setVotes(vote);
  };

  //returns the largest value contained in the "votes" array
  const maxVotes = Math.max(...votes);

  //find the index of the most voted anecdote
  const mostVotesIndex = votes.indexOf(maxVotes);

  //retrieve the most voted anecdote
  const mostVoteAnecdote = anecdotes[mostVotesIndex];

  //retrieve the number of votes for that anecdote
  const mostVotes = votes[mostVotesIndex];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voting}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{mostVoteAnecdote}</p>
      <p>has {mostVotes}votes</p>
    </div>
  );
};

export default App;
