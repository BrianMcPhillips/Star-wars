import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StarShipDetail = ({
  name, 
  model,
  manufacturer,
  const_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  hyperdrive_rating,
  starship_class,
  pilots,
  films
}) => (
  <div>
    <h1>{name}</h1>
    <h3>Model: {model}</h3>
    <h4>Manufacturer: {manufacturer}</h4>
    <h4>Cost: {const_in_credits} credits</h4>
    <h4>Length: {length}</h4>
    <h4>Max Speed: {max_atmosphering_speed} atmospheres</h4>
    <h5>No. of crew {crew}</h5>
    <h5>Passengers: {passengers}</h5>
    <h5>HyperDrive Rating: {hyperdrive_rating}</h5>
    <h5>Starship Class: {starship_class}</h5>
    <h4>Pilots: {pilots.map((pilot, i) =>
      <Link 
        to={`/char-detail/${pilot.split('people/')[1]}`}
        key={pilot + i}>
        <p>{pilot}</p>
      </Link>
    )}
    </h4>
    <h4>Films: {films.map((film, i) =>
      <Link 
        to={`/film-detail/${film.split('films/')[1]}`}
        key={film + i}>
        <p>{film}</p>
      </Link> 
    )}
    </h4>
  </div>
);

StarShipDetail.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  const_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  hyperdrive_rating: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
  pilots: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default StarShipDetail;
