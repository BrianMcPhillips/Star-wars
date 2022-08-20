import React, { useState } from 'react';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchBy = ({ target }) => setSearchBy(target.value);
  const handleSearchTerm = ({ target }) => setSearchTerm(target.velue);

   
  return (

  );
};

export default SearchPage;
