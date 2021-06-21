import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodMessage = "Good";
  const neutralMessage = "Neutral";
  const badMessage = "Bad";

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div className="App">
      <h1>Give us your Feedback </h1>
      <div>
        <Button label={goodMessage} onClickButton={handleClickGood} />
        <h2>{good}</h2>
      </div>
      <div>
        <Button label={neutralMessage} onClickButton={handleClickNeutral} />
        <h2>{neutral}</h2>
      </div>
      <div>
        <Button label={badMessage} onClickButton={handleClickBad} />
        <h2>{bad}</h2>
      </div>
    </div>
  );
};

export default App;
