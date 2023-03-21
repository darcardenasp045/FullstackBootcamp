import React, { useState } from "react";

function App() {
  // Define an array
  const myArray = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  // Define a state variable to keep track of the selected array position
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Define a state variable to keep track of the vote counts
  const [votes, setVotes] = useState(
    myArray.reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {})
  );

  // Define a state variable to keep track of the highest vote count
  const [highestVoteCount, setHighestVoteCount] = useState(0);

  // Define a state variable to keep track of the most voted item
  const [mostVotedItem, setMostVotedItem] = useState("");

  // Define a function to handle the button click
  function handleClick() {
    var random = Math.random();
    const randomPosition = Math.floor(random * myArray.length);

    setSelectedPosition(myArray[randomPosition]);
  }

  const handleCliclckVote = (type) => {
    setVotes((prevState) => {
      const newState = {
        ...prevState,
        [type]: prevState[type] + 1,
      };
      
      // Update the highest vote count and most voted item if needed
      let newHighestVoteCount = 0;
        for (let key in newState) {
            if (newState[key] > newHighestVoteCount) {
              newHighestVoteCount = newState[key];
          }
        }
      if (newHighestVoteCount !== highestVoteCount) {
        setHighestVoteCount(newHighestVoteCount);
        let mostVotedItem;
        let highestVoteCount = -1;

        for (let key in newState) {
          if (newState[key] > highestVoteCount) {
            highestVoteCount = newState[key];
            mostVotedItem = key;
          }
        }

        setMostVotedItem(mostVotedItem);
      }
      return newState;
    });
  };

  // Render the component
  return (
    <div>
      <button onClick={handleClick}>Mostrar contenido de posición aleatoria</button>
      {selectedPosition !== null && (
        <>
          <p>El contenido de la posición aleatoria es: {selectedPosition}</p>
          <button onClick={() => handleCliclckVote(selectedPosition)}>Votar</button>
          <p>Votos para {selectedPosition}: {votes[selectedPosition]}</p>
        </>
      )}
      <h2>Resultados de la votación</h2>
      {highestVoteCount > 0 && (
        <p>El contenido más votado es {mostVotedItem} con {highestVoteCount} votos.</p>
      )}
    </div>
  );
}

export default App;
