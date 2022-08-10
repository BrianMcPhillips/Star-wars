import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

const CharacterList = ({ data }) => {
  const characterStuff = data.map(character => {
    <li>
      <Character {...character}/>
    </li>;
  });

  return (
    <ul>
      {characterStuff}
    </ul>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default CharacterList;
