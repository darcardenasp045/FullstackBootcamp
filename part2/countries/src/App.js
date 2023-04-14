import React, { useState, useEffect } from "react";
import Note from "./Note.js";
import axios from "axios";

const App = ({ personsNames }) => {
  const [persons, setPersons] = useState(personsNames);
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        const { data } = response;
        console.log(response);
        setPersons(data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredPersons = Array.isArray(persons)
    ? persons.filter((person) => person.name && typeof person.name === "string" && person.name.toLowerCase().includes(filterValue.toLowerCase()))
    : [];

  return (
    <div>
      Ingresa la letra que quieres buscar:
      <input value={filterValue} onChange={handleFilterChange} />
      <h2>Phonebook</h2>
      {loading ? "Cargando...." : ""}
      <h2>Numbers</h2>
      {filteredPersons.length > 0 ? (
        filteredPersons.map((note) => {
          return <Note key={note.id} {...note} />;
        })
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default App;
