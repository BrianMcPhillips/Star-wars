import React from 'react';
import PropTypes from 'prop-types';

const FilmDetail = ({ 
  title, 
  release_date,
  producer, 
  director, 
  characters,
  planets,
  species,
  starships,
  vehicles
}) => (
  <div>
    <h1>{title}</h1>
    <h3>Release date: {release_date}</h3>
    <h3>Producer: {producer}</h3>
    <h3>Director: {director}</h3>
    <h3>Characters: {characters.map((character, i) => {
      <p key={character + i}>{character}</p>;
    })}
    </h3>
    <h3>Planets: {planets.map((planet, i) => {
      <p key={planet + i}>{planet}</p>;
    })}
    </h3>
    <h3>Species: {species.map((specie, i) => {
      <p key={specie + i}>{specie}</p>;
    })}
    </h3>
    <h3>Starships: {starships.map((ship, i) => {
      <p key={ship + i}>{ship}</p>;
    })}
    </h3>
    <h3>Vehicles: {vehicles.map((vehicle, i) => {
      <p key={vehicle + i}>{vehicle}</p>;
    })}
    </h3>
  </div>
);

FilmDetail.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  planets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  species: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  starships: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default FilmDetail;
