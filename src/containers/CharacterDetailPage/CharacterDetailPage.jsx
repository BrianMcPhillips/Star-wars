import React, { useEffect, useState } from 'react';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';

const CharacterDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1')
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading</h1>;
  return (
    <div>
      <CharacterDetail {...data}/>
    </div>
  );
};

export default CharacterDetailPage;
