import React from 'react';
import PropTypes from 'prop-types';

const StarShip = ({ name, model, url }) => (
  <>
    <h1>{name}</h1>
    <h3>{model}</h3>
  </>
);

StarShip.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default StarShip;
