import React from 'react';
import PropTypes from 'prop-types';
import Planet from '../Planet/Planet';

const PlanetList = ({ data }) => {
  const planetStuff = data.map((planet, i) => 
    <li key={planet.url + i}>
      <Planet {...planet}/>
    </li>
  );

  return (
    <ul>
      {planetStuff}
    </ul>
  );

};

PlanetList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default PlanetList;
