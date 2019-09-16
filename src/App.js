import React from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';

import { Home, About, Contact, Navigation } from './components';


const App = () => (
  <div>
    <Navigation />
    <Link
      exact className="some-link" to="/">
       Home
     </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>

      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
  </div>
);

export default App;
