import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
// import registerServiceWorker from "./components/registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
  </Provider>,

  document.getElementById("root")
);
