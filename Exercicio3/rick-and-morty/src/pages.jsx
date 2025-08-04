import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MortysPage from './components/MortysPage';
import RicksPage from './RicksPage';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/mortys">Mortys</Link></li>
            <li><Link to="/ricks">Ricks</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/mortys" component={MortysPage} />
        <Route path="/ricks" component={RicksPage} />
      </Switch>
    </Router>
  );
}

export default App;
