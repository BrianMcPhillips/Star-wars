import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film/Film';

const FilmList = ({ data }) => {
  const filmStuff = data.map((film, i) => (
    <li key={film.url + i}>
      <Film {...film}/>
    </li>
  ));

  return (
    <ul>
      {filmStuff}
    </ul>
  );
};

FilmList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default FilmList;
