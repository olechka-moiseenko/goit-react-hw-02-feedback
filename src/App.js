import React, { Component } from "react";
import feedbackOptions from "./components/feedbackOptions/feedbackOptions";
// import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>;<button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </>
    );
  }
}

export default App;
