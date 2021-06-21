import React, { useState } from "react";

const Votes = ({ phrases }) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(phrases[selected].votes);

  const handleNextPhrase = () => {
    setSelected(Math.floor(Math.random() * 6));
  };
  const handleVotes = () => {
    const newVotes = phrases[selected].votes++;
    setVote(newVotes)
    phrases[selected].votes = newVotes
  };

  return (
    <div display="flex" flexDirection="row">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {phrases[selected].text}
      </p>
      <p>voted: {vote} times</p>
      <button onClick={handleNextPhrase}>
        Next motivational random phrase
      </button>
      <button onClick={handleVotes}>Vote + 1</button>
    </div>
  );
};

export default Votes;
