import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

const CharacterList = ({ data }) => {
  const characterStuff = data.map((character, i) => (
    <li key={character.url + i}>
      <Character {...character}/>
    </li>
  ));


  return (
    <ul>
      {characterStuff}
    </ul>

  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default CharacterList;
