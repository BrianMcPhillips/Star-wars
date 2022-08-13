import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterDetailPage from 
  '../../containers/CharacterDetailPage/CharacterDetailPage';
import CharacterPage from '../../containers/CharacterPage/CharacterPage';
import FilmDetailPage from '../../containers/FilmDetailPage/FilmDetailPage';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/char-detail/:id" element={<CharacterDetailPage />} />
        <Route path="/film-detail/:id" element={<FilmDetailPage />} />
      </Routes>
    </Router>
  );
}
