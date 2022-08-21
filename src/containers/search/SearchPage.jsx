import React, { useState } from 'react';
import Search from '../../components/search/Search/Search';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchBy = ({ target }) => setSearchBy(target.value);
  const handleSearchTerm = ({ target }) => setSearchTerm(target.velue);
  const makeRequest = () => 
    fetch(`https://swapi.dev/api/${searchBy}/?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
   
  return (
    <Search 
      searchBy={searchBy}
      searchTerm={searchTerm}
      handleSearchBy={handleSearchBy}
      handleSearchTerm={handleSearchTerm}
      makeRequest={makeRequest}
    />
  );
};

export default SearchPage;
