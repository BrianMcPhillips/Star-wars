import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlanetDetail = ({
  name,
  diameter,
  climate,
  gravity,
  terrain,
  population,
  residents,
  films
}) => (
  <div>
    <h1>{name}</h1>
    <h3>Diameter: {diameter}</h3>
    <h4>Climate: {climate}</h4>
    <h4>Gravity: {gravity}</h4>
    <h4>Terrain: {terrain}</h4>
    <h4>Population: {population}</h4>
    <h4>Residents: {residents.map((resident, i) => 
      <Link
        to={`/char-detail/${resident.split('people/')[1]}`}
        key={resident + i}>
        <p>{resident}</p>
      </Link>
    )}</h4>
    <h4>Films: {films.map((film, i) => 
      <Link
        to={`/film-detail/${film.split('films/')[1]}`}
        key={film + i}>
        <p>{film}</p>
      </Link>
    )}</h4>
  </div>
);

PlanetDetail.propTypes = {
  name: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default PlanetDetail;
