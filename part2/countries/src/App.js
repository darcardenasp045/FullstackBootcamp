import React, { useState, useEffect } from "react";
import axios from "axios";

const MiComponente = () => {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countries = response.data;
        setCountries(countries);
      })
      .catch((error) => {
        console.error("Error en la llamada a la API:", error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredCountries = filterValue
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
    : countries;

  return (
    <div>
      Ingresa el país a buscar:
      <input value={filterValue} onChange={handleFilterChange} />
      <h1>Lista de Países</h1>
      {filterValue=== ""
      ? 
      <p>Ingresa un pais para buscar.....⬆️</p>
      :<ul>
      {filteredCountries.map((country) => (
        <li key={country.cca3}>
          <p>Nombre: {country.name.common}</p>
          <p>Capital: {country.capital}</p>
          <p>Continente: {country.region}</p>
          <img
            src={country.flags.svg}
            alt={`Bandera de ${country.name.common}`}
            style={{ height: "50px", width: "auto" }}
          />
          {/* Renderizar otros datos relevantes del país */}
        </li>
      ))}
    </ul>
      }
      
    </div>
  );
};

export default MiComponente;
