import React from 'react';
import PropTypes from 'prop-types';
import Species from '../Species/Species';

const SpeciesList = ({ data }) => {
  const listStuff = data.map((specie, i) =>
    <li key={specie.url + i}>
      <Species {...specie}/>
    </li> 
  );
  
  return (
    <ul>
      {listStuff}
    </ul>
  );
};

SpeciesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default SpeciesList;
