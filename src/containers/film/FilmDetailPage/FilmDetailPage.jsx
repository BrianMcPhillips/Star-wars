import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/app/Loading/Loading';
import FilmDetail from '../../../components/films/FilmDetail/FilmDetail';

const FilmDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <FilmDetail {...data}/>
  );
};

export default FilmDetailPage;
