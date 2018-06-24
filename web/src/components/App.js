import React, { Component } from "react";

import "./App.css";
import 'bulma/css/bulma.css'
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Route, Switch } from "react-router-dom";

import { store } from "../store";

import ajaxApi from "../ajaxApi";

import { Spring, Transition, animated } from "react-spring";

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

const mapDispatchToProps = dispatch => ({});

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
