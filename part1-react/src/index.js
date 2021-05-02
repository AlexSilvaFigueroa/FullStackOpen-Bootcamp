import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from './components/Total'

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      part: "Fundamentals of React",
    },
    {
      part: "Using props to pass data",
    },
    {
      part: "State of a component",
    },
  ]
  
  const values = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total values={values}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
