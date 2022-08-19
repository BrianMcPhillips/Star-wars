import React, { useEffect, useState } from 'react';
import Loading from '../../../components/app/Loading/Loading';
import CharacterList from 
  '../../../components/characters/CharacterList/CharacterList';
import { fetchCharacters } from '../../../services/star-wars-api';

const CharacterPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchCharacters()
      .then(data => setData(data.results))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <div>
      <h1>Characters</h1>
      <CharacterList data={data}/>
    </div>
    
  );

};

export default CharacterPage;
