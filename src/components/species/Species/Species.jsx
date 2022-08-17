import React from 'react';
import PropTypes from 'prop-types';

const Species = ({ name, url }) => (
  <>
    <h1>{name}</h1>
  </>
);

Species.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Species;
