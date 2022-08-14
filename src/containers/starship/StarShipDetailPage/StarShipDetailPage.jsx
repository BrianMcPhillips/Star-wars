import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarShipDetail from 
  '../../../components/starships/StarShipDetail/StarShipDetail';

const StarShipDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <StarShipDetail {...data}/>
  );
};

export default StarShipDetailPage;
