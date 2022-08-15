import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VehicleDetail = ({ 
  name, 
  model, 
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  vehicle_class,
  pilots,
  films,
  url 
}) => (
  <div>
    <h1>{name}</h1>
    <h3>{model}</h3>
    <h4>{manufacturer}</h4>
    <h4>Cost: {cost_in_credits}</h4>
    <h4>Length: {length}</h4>
    <h4>Speed: {max_atmosphering_speed}</h4>
    <h4>Crew: {crew}</h4>
    <h4>Passengers: {passengers}</h4>
    <h4>Vehicle Class: {vehicle_class}</h4>
    <h4>Pilots: {pilots.map((pilot, i) =>
      <Link 
        to={`/char-detail/${pilot.split('people/')[1]}`}
        key={pilot + i}>
        <p>{pilot}</p>
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

VehicleDetail.propTypes = {
  name: PropTypes.string.isRequired, 
  model: PropTypes.string.isRequired, 
  manufacturer: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  vehicle_class: PropTypes.string.isRequired,
  pilots: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired
};

export default VehicleDetail;
