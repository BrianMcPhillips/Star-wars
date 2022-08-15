import React from 'react';
import PropTypes from 'prop-types';
import Vehicle from '../Vehicle/Vehicle';

const VehicleList = ({ data }) => {
  const vehicleStuff = data.map((vehicle, i) => 
    <li key={vehicle + i}>
      <Vehicle {...vehicle} />
    </li>
  );

  return (
    <ul>
      {vehicleStuff}
    </ul>
  );
};

VehicleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default VehicleList;
