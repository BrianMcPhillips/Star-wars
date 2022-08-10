import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name }) => (
  <>
    <h2>{name}</h2>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired
};

export default Character;
