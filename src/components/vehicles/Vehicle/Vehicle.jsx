import React from 'react';
import PropTypes from 'prop-types';

const Vehicle = ({ name, model, url }) => (
  <>
    <h1>{name}</h1>
    <h4>{model}</h4>
  </>
);

Vehicle.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};

export default Vehicle;
