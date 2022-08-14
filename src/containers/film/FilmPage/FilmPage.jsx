import React, { useEffect, useState } from 'react';
import FilmList from '../../components/FilmList/FilmList';

const FilmPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(data => setData(data.results))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading</h1>;
  return (
    <FilmList data={data}/>
  );
};

export default FilmPage;
