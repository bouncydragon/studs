import React, { Component } from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Home;