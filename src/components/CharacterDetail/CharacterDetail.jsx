import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ 
  name, 
  birth_year, 
  hair_color, 
  films, 
  vehicles, 
  starships 
}) => (
  <div>
    <h1>{name}</h1>
    <h4>Birth Year: {birth_year}</h4>
    <h4>Hair color: {hair_color}</h4>
    <h4>Films: {films.map((film, i) => 
      <p key={film + i}>{film}</p>)}
    </h4>
    <h4>Vehicles: {vehicles.map((vehicle, i) => 
      <p key={vehicle + i}>{vehicle}</p>)}
    </h4>
    <h4>Starships: {starships.map((ship, i) => 
      <p key={ship + i}>{ship}</p>)}
    </h4>
  </div>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  starships: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default CharacterDetail;
