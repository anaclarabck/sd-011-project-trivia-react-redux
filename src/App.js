import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import GameScreen from './pages/GameScreen';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/game" component={ GameScreen } />
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}
