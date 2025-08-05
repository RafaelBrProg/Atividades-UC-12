import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MortysPage from './components/MortysPage';
import RicksPage from './components/RicksPage';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Rick and Morty</h1>
          <nav>
            <ul>
              <li><Link to="/mortys">Mortys</Link></li>
              <li><Link to="/ricks">Ricks</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/mortys" element={<MortysPage />} />
          <Route path="/ricks" element={<RicksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
