import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VehicleDetail from 
  '../../../components/vehicles/VehicleDetail/VehicleDetail';


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
    <VehicleDetail {...data}/>
  );

};

export default VehicleDetailPage;
