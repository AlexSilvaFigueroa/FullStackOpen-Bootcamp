import React from "react";
import ReactDOM from "react-dom";
import { courses as Data } from './data/data'
import Header from "./components/Header";
import Content from "./components/Content";
import Total from './components/Total'
import Course from './components/Course'
import { handleContent } from './infrastructure/storage/coursesStorage'

const [ , courseObject ] = Data
const { name, parts } = handleContent(Data)

const App = () => { 
  return (
    <div>
      <Header title={name}/>
      <Content parts={parts} />
      <Total exercises={parts}/> 
      <Course dataCourse={courseObject}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
