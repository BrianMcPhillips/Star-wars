import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/app/Loading/Loading';
import SpeciesDetail from 
  '../../../components/species/SpeciesDetail/SpeciesDetail';

const SpeciesDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/species/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <SpeciesDetail {...data}/>
  );
};

export default SpeciesDetailPage;
