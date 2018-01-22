import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import Home from './app/views/pages/home';
import configureStore from './app/state/store';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" name="Home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default App;
