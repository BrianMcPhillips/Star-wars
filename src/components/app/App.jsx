import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterDetailPage from 
  '../../containers/CharacterDetailPage/CharacterDetailPage';
import FilmPage from '../../containers/FilmPage/FilmPage';
// import CharacterPage from '../../containers/CharacterPage/CharacterPage';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilmPage />} />
        <Route path="/detail/:id" element={<CharacterDetailPage />} />
      </Routes>
    </Router>
  );
}
