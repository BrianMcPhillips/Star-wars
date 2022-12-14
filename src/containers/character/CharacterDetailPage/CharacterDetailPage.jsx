import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/app/Loading/Loading';
import CharacterDetail from 
  '../../../components/characters/CharacterDetail/CharacterDetail';
import { fetchOneCharacter } from '../../../services/star-wars-api';

const CharacterDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchOneCharacter(id)
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <div>
      <CharacterDetail {...data}/>
    </div>
  );
};

export default CharacterDetailPage;
