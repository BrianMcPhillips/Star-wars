import React, { useEffect, useState } from 'react';
import Loading from '../../../components/app/Loading/Loading';
import PlanetDetail from 
  '../../../components/planets/PlanetDetail/PlanetDetail';

const PlanetDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/1/')
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <PlanetDetail {...data}/>
  );
};

export default PlanetDetailPage;
