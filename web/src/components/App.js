import React, { Component } from "react";

import "./App.css";
//Debug css file, outlines / shows margins etc

import 'bulma/css/bulma.css';

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";



import Header from "./Header";
import Home from "./home";
import Battle from "./battle";
// import Home from "../components/home";
// import Login from "../components/Login";
// import Register from "../components/Register";

const mapStateToProps = state => {

  return {
    ...state.common,
    appName: state.common.appName
  };
  
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header appName={this.props.appName} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/battle_key/:battle_key" component={Battle} />
        </Switch>
      </div>
    );
  }
}
export default connect(
  mapStateToProps
)(App);
