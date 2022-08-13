import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, url }) => {
  const id = url.split('people/')[1];

  return (
    <div>
      <h2>
        <Link to={`/char-detail/${id}`}>
          {name}
        </Link>
      </h2>
    </div>
  );

};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Character;
