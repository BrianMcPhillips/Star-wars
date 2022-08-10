import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, birth_year }) => (
  <div>
    <h1>{name}</h1>
    <h5>{birth_year}</h5>
  </div>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired
};

export default CharacterDetail;
