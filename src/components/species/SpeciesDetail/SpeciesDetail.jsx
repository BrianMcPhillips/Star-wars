import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpeciesDetail = ({ 
  name,
  classification,
  designation,
  average_lifespan,
  homeworld,
  language,
  people,
  films
}) => (
  <div>
    <h1>{name}</h1>
    <h4>Classification: {classification}</h4>
    <h4>Designation: {designation}</h4>
    <h4>Average Lifespan: {average_lifespan}</h4>
    <h4>Homeworld: {homeworld}</h4>
    <h4>Language: {language}</h4>
    <h4>Characters: {people.map((person, i) => 
      <Link 
        to={`/char-detail/${person.split('people/')[1]}`}
        key={person + i}>
        <p>{person}</p>
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

SpeciesDetail.propTypes = {
  name: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  average_lifespan: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default SpeciesDetail;
