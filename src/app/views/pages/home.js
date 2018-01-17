import React, { Component } from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import appRoutes from "../../routes";
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props}/>
          <Switch>
            {
              appRoutes.map((prop,key) => {
                if(prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.to} key={key}/>
                  );
                return (
                  <Route path={prop.path} component={prop.component} key={key}/>
                );
              })
            }
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;