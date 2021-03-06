import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import { LabGearsThemeProvider } from '@labgears/theme';

import Home from './app/views/pages/home';
import Login from './app/views/pages/login';

import configureStore from './app/state/store';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <LabGearsThemeProvider theme='light'>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login" component={Login} />
            <Route path="/" name="Home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ReduxProvider>
      </LabGearsThemeProvider>
    );
  }
}

export default App;
