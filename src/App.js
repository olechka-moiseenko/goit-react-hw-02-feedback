import React, { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/feedbackOptions";
import Section from "./components/section/section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeesback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className="Container">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleBtnClick}
            />
          </Section>

          <Section title="Statistics"></Section>
        </div>
      </>
    );
  }
}

export default App;
