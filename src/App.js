import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Home,
  Admin,
  Lobby,
  Gameplay,
  CreateQuestions,
  StartGame
} from 'app/views';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/lobby/:lobbyId' component={Lobby}/>
          <Route exact path='/gameplay/:lobbyId' component={Gameplay}/>
          <Route exact path='/admin/create-questions' component={CreateQuestions}/>
          <Route exact path='/admin/start-game/:lobbyId' component={StartGame}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
