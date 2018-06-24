import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";
import registerServiceWorker from "./components/registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
  </Provider>,

  document.getElementById("root")
);
