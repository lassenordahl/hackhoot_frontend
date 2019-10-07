import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Home,
  Admin,
  Lobby
} from 'app/views';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/lobby/:lobbyId' component={Lobby}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
