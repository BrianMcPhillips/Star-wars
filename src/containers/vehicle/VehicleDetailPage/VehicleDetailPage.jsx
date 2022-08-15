import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilmDetail from '../../../components/films/FilmDetail/FilmDetail';

const VehicleDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <FilmDetail {...data}/>
  );

};

export default VehicleDetailPage;
