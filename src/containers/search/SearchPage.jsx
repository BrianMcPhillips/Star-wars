import React, { useState } from 'react';
import Search from '../../components/search/Search/Search';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchBy = ({ target }) => setSearchBy(target.value);
  const handleSearchTerm = ({ target }) => setSearchTerm(target.velue);

   
  return (
    <Search 
      searchBy={searchBy}
      searchTerm={searchTerm}
      handleSearchBy={handleSearchBy}
      handleSearchTerm={handleSearchTerm}
    />
  );
};

export default SearchPage;
