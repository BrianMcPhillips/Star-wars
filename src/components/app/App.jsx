import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterDetailPage from 
  '../../containers/character/CharacterDetailPage/CharacterDetailPage';
import CharacterPage from 
  '../../containers/character/CharacterPage/CharacterPage';
import FilmDetailPage from 
  '../../containers/film/FilmDetailPage/FilmDetailPage';
import StarShipDetailPage from 
  '../../containers/starship/StarShipDetailPage/StarShipDetailPage';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/char-detail/:id" element={<CharacterDetailPage />} />
        <Route path="/film-detail/:id" element={<FilmDetailPage />} />
        <Route path="/ship-detail/:id" element={<StarShipDetailPage />} />
      </Routes>
    </Router>
  );
}
