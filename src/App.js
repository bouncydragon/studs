import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import Home from './app/views/pages/home';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Home" component={Home}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
