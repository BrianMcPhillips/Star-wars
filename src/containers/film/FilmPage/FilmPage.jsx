import React, { useEffect, useState } from 'react';
import Loading from '../../../components/app/Loading/Loading';
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

  if(loading) return <Loading />;
  return (
    <FilmList data={data}/>
  );
};

export default FilmPage;
