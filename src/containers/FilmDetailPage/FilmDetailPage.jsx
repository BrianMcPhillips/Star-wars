import React, { useEffect, useState } from 'react';
import FilmDetail from '../../components/FilmDetail/FilmDetail';

const FilmDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/films/1/')
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <FilmDetail {...data}/>
  );
};

export default FilmDetailPage;
