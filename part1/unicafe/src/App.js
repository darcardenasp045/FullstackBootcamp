
import './App.css';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';



const Statistics = (props) =>{
  return <h1>ESTOS SON LOS CLICKS TOTALES: {props.value} 
  <p>{props.text} {props.value2}</p>
  
  </h1>;
  

}

const WarningNotUSe = () =>{
  return <h1>No Feddback Given</h1>;
}



function App() {

  const [counters, setCounters] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    counter: 0
  })

  const handleCliclckGood = () => {
    setCounters({
      ...counters,
      good: counters.good + 1,
      counter : counters.counter + 1
    });
  };

  const handleCliclckNeutral = () => {
    setCounters({
      ...counters,
      neutral: counters.neutral + 1,
      counter : counters.counter + 1

    });
  };

  const handleCliclckBad = () => {
    setCounters({
      ...counters,
      bad: counters.bad + 1,
      counter : counters.counter + 1

    });
  };
  return (
      <div className="App">
        <h1>Give FeedBack</h1>
        <button onClick={handleCliclckGood}>good</button>
        <button onClick={handleCliclckNeutral}>neutral</button>
        <button onClick={handleCliclckBad}>bad</button>
        <h1>Statistics</h1>
        <p>Good: {counters.good} </p>
        <p>Neutral: {counters.neutral} </p>
        <p>Bad: {counters.bad}</p>
        {counters.counter === 0 ? <WarningNotUSe/> : <Statistics value={ counters.counter} 
        text= "Good: " 
        value2 = {counters.good}/>}
      </div>
    );
}

export default App;
