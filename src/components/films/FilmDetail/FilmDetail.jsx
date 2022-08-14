import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
}) => {
  const mapData = array => array.map((item, i) => 
    <p key={item + i}>{item}</p>
  );

  return (
    <div>
      <h1>{title}</h1>
      <h3>Release date: {release_date}</h3>
      <h3>Producer: {producer}</h3>
      <h3>Director: {director}</h3>
      <h3>Characters: {characters.map((character, i) =>
        <Link 
          to={`/char-detail/${character.split('people/')[1]}`} 
          key={character + i}>
          <p>{character}</p>
        </Link>
      )}
      </h3>
      <h3>Planets: {planets.map((planet, i) => 
        <Link
          to={`/planet-detail/${planet.split('planets/')[1]}`} 
          key={planet + i}>
        </Link>
      )}</h3>
      <h3>Species: {mapData(species)}</h3>
      <h3>Starships: {starships.map((ship, i) =>
        <Link 
          to={`/ship-detail/${ship.split('ships/')[1]}`} 
          key={ship + i}>
          <p>{ship}</p>
        </Link>
      )}</h3>
      <h3>Vehicles: {mapData(vehicles)}</h3>
    </div>
  );
};

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
