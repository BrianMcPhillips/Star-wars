import React from 'react';
import PropTypes from 'prop-types';

const Film = ({ title, url }) => {

  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Film;
