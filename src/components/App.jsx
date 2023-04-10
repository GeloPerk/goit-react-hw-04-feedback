import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Div } from './App.styled';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statusInfo = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = (option) => {
  switch (option) {
    case 'good':
      setGood(good + 1);
      break;
    case 'neutral':
      setNeutral(neutral + 1);
      break;
    case 'bad':
      setBad(bad + 1);
      break;
    default:
      throw new Error('Неизвестная опция');
  }
};

  const countTotalFeedBack = () => {
    const { good, neutral, bad } = statusInfo;
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = statusInfo;
    return Number(((good / (neutral + bad + good)) * 100).toFixed()) + '%';
    
  };

  return (
    <Div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(statusInfo)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>

        {countTotalFeedBack() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedBack()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Div>
  );
}

export default App;
// оо