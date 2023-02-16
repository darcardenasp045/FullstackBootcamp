import './App.css'; 
import { useState } from 'react';

const StatisticRow = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticRow label="Good" value={good} />
        <StatisticRow label="Neutral" value={neutral} />
        <StatisticRow label="Bad" value={bad} />
        <StatisticRow label="Total" value={total} />
        <StatisticRow label="Average" value={average.toFixed(2)} />
        <StatisticRow label="Positive Percentage" value={`${positivePercentage.toFixed(2)}%`}
        />
      </tbody>
    </table>
  );
};

function App() {
  const [counters, setCounters] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleCliclck = (type) => {
    setCounters((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => handleCliclck('good')}>Good</button>
      <button onClick={() => handleCliclck('neutral')}>Neutral</button>
      <button onClick={() => handleCliclck('bad')}>Bad</button>
      <h1>Statistics</h1>
      <Statistics
        good={counters.good}
        neutral={counters.neutral}
        bad={counters.bad}
      />
    </div>
  );
}

export default App;
