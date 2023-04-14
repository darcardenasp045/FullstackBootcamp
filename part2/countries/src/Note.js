const Note = ({ name, capital, languages, population, flags }) => {
    return (
      <div>
        <p>{name}</p>
        <p>
          <strong>{capital}</strong>
        </p>
        {languages}
        <p>{population}</p>
        <p>{flags}</p>
      </div>
    );
  };
  
  export default Note;
  