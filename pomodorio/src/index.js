import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PomodoroPage from './components/PomodoroPage/PomodoroPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import './index.css';
import './styles/styles.css';
import './styles/reset.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>  
      <Route path="pomodoro" component={PomodoroPage} />
      <Route path="settings" component={SettingsPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);

