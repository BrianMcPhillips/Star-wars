import React from 'react';
import PropTypes from 'prop-types';

const Planet = ({ name, terrain, url }) => (
  <>
    <h1>{name}</h1>
    <h4>{terrain}</h4>
  </>
);

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired
};

export default Planet;
