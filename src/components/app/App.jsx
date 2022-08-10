import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterDetailPage from 
  '../../containers/CharacterDetailPage/CharacterDetailPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterDetailPage />} />
      </Routes>
    </Router>
  );
}
