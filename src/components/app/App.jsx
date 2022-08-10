import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterPage from '../../containers/CharacterPage/CharacterPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}
