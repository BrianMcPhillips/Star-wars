import React from 'react';
import PropTypes from 'prop-types';

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
      <p key={resident + i}>{resident}</p>
    )}</h4>
    <h4>Films: {films.map((film, i) => 
      <p key={film + i}>{film}</p>
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
