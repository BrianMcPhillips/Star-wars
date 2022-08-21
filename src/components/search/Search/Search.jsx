import React from 'react';
import PropTypes from 'prop-types';
import { terms } from '../../../assets/data';

const Search = ({
  searchBy,
  searchTerm,
  handleSearchBy,
  handleSearchTerm
}) => (
  <div>
    <h3>Search</h3>
    <input onChange={handleSearchTerm} type="text" value={searchTerm}/>
    <select onChange={handleSearchBy} value={searchBy}>
      {
        terms.map((option, i) => 
          <option key={option + i} value={option}>{option}</option>
        )
      }
    </select>
  </div>
);

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearchBy: PropTypes.func.isRequired,
  handleSearchTerm: PropTypes.func.isRequired
};

export default Search;
