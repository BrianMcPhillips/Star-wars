import React, { useEffect, useState } from 'react';
import StarShipDetail from 
  '../../../components/starships/StarShipDetail/StarShipDetail';

const StarShipDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/5/')
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
