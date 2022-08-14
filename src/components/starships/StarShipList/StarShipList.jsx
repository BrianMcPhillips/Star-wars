import React from 'react';
import PropTypes from 'prop-types';
import StarShip from '../StarShip/StarShip';

const StarShipList = ({ data }) => {
  const shipStuff = data.map((ship, i) => 
    <li key={ship + i}>
      <StarShip {...ship}/>
    </li>
  );

  return (
    <ul>
      {shipStuff}
    </ul>
  );
};

StarShipList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default StarShipList;
