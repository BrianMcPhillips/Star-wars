import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';

const CharacterPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(data => setData(data.results))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return (<h1>Loading...</h1>);
  return (
    <div>
      <h1>Characters</h1>
      <CharacterList data={data}/>
    </div>
    
  );


};

export default CharacterPage;
